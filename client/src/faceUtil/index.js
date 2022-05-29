import * as faceapi from 'face-api.js';

export async function loadModels(
  setLoadingMessage,
  setLoadingMessageError
) {
  const MODEL_URL = process.env.PUBLIC_URL + '/models';
//loading face models for face detection,finding face landmark points and feature extraction
  try {
    setLoadingMessage('Loading Face Detector');
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);

    setLoadingMessage('Loading 68 Facial Landmark Detector');
    await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);

    setLoadingMessage('Loading Feature Extractor');
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
  } catch (err) {
    setLoadingMessageError(
      'Model loading failed.'
    );
  }
}
//function to transform image source to 128 feature vectors
export async function getFullFaceDescription(blob, inputSize = 512) {
  // swtting score threshold to determine between positive and negative class
  let scoreThreshold = 0.8;
  const OPTION = new faceapi.SsdMobilenetv1Options({
    inputSize,
    scoreThreshold,
  });
  const useTinyModel = true;

  // fetch image to api by passing image data
  let img = await faceapi.fetchImage(blob);

  // detect all faces and generate full description from image
  // including landmark and descriptor of each face
  let fullDesc = await faceapi
    .detectAllFaces(img, OPTION)
    .withFaceLandmarks(useTinyModel)
    .withFaceDescriptors();
  return fullDesc;
}

export async function createMatcher(faceProfile, maxDescriptorDistance) {
  // Create labeled descriptors of member from profile
  let labeledDescriptors = faceProfile.map(
    (profile) =>
      new faceapi.LabeledFaceDescriptors(
        profile.student._id,
        profile.facePhotos.map(
          //parsing string feature descriptor to Float32Array and finding best match using Euclidean algorithm
          (photo) => new Float32Array(photo.faceDescriptor.match(/-?\d+(?:\.\d+)?/g).map(Number))
        )
      )
  );

  // Create face matcher (maximum descriptor distance is 0.5)
  let faceMatcher = new faceapi.FaceMatcher(
    labeledDescriptors,
    maxDescriptorDistance
  );

  return faceMatcher;
}
//checking whether models have loaded or not
export function isFaceDetectionModelLoaded() {
  return !!faceapi.nets.ssdMobilenetv1.params;
}

export function isFeatureExtractionModelLoaded() {
  return !!faceapi.nets.faceRecognitionNet.params;
}

export function isFacialLandmarkDetectionModelLoaded() {
  return !!faceapi.nets.faceLandmark68TinyNet.params;
}