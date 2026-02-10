import { DEFAULT_TRANSCRIPT_TEMPLATE } from '../settings';
import { SettingsItemHeader } from './SettingsItem';
import useSettingsForm from '../hooks/useSettingsForm';

export const TranscriptFormatSettings: React.FC = () => {
  const { register } = useSettingsForm();
  const registered = register('transcriptTemplate');

  return (
    <div className="scribe-transcript-format-settings">
      <SettingsItemHeader name="Transcript Format" />

      <div style={{ marginBottom: '12px', marginTop: '8px' }}>
        <label
          htmlFor="transcriptTemplate"
          style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
        >
          Transcript template
        </label>
        <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '8px' }}>
          Define how your transcript should be formatted. Use the following variables:
        </p>
        <ul
          style={{
            fontSize: '0.85em',
            color: '#666',
            marginBottom: '12px',
            paddingLeft: '20px',
          }}
        >
          <li>
            <code>{'{{audioPath}}'}</code> - Audio file path (only included if file is saved)
          </li>
          <li>
            <code>{'{{transcript}}'}</code> - The actual transcript text
          </li>
        </ul>

        <textarea
          id="transcriptTemplate"
          value={registered.value}
          onChange={(e) => registered.onChange(e.currentTarget.value)}
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '8px',
            fontFamily: 'monospace',
            fontSize: '0.9em',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
          placeholder={DEFAULT_TRANSCRIPT_TEMPLATE}
        />
      </div>

      <div
        style={{
          marginTop: '12px',
          padding: '8px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <p style={{ fontSize: '0.85em', color: '#666', margin: '0' }}>
          <strong>Example:</strong>{' '}
          <code style={{ backgroundColor: '#fff', padding: '2px 4px', borderRadius: '2px' }}>
            {'![[{{audioPath}}]]\n{{transcript}}'}
          </code>
        </p>
      </div>
    </div>
  );
};

export default TranscriptFormatSettings;
