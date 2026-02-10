export function buildTranscriptText(
  template: string,
  transcript: string,
  isSaveAudioFileActive: boolean,
  audioRecordingFilePath?: string,
): string {
  let result = template;

  // Replace audio path variable (only if saving and path available)
  if (isSaveAudioFileActive && audioRecordingFilePath) {
    while (result.includes('{{audioPath}}')) {
      result = result.replace('{{audioPath}}', audioRecordingFilePath);
    }
  } else {
    while (result.includes('{{audioPath}}')) {
      result = result.replace('{{audioPath}}', '');
    }
  }

  // Replace transcript variable
  while (result.includes('{{transcript}}')) {
    result = result.replace('{{transcript}}', transcript);
  }

  return result;
}
