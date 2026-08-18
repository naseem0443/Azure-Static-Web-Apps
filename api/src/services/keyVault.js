const { DefaultAzureCredential } = require('@azure/identity');
const { SecretClient } = require('@azure/keyvault-secrets');

const keyVaultUrl = process.env.KEY_VAULT_URL;

if (!keyVaultUrl) {
  throw new Error('KEY_VAULT_URL environment variable is not configured.');
}

const credential = new DefaultAzureCredential();

const secretClient = new SecretClient(
  keyVaultUrl,
  credential
);

async function getSecret(secretName) {
  const secret = await secretClient.getSecret(secretName);

  if (!secret.value) {
    throw new Error(`Secret '${secretName}' has no value.`);
  }

  return secret.value;
}

module.exports = {
  getSecret
};