import SC from 'soundcloud'
import SOUND_CLOUD_CLIENT_ID from './soundcloudID'

SC.initialize({
  client_id: SOUND_CLOUD_CLIENT_ID
});

export default SC
