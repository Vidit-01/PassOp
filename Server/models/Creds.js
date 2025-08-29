import mongoose from 'mongoose';

const credentialSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  website: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Creds = mongoose.model('Credential', credentialSchema);
export default Creds;
