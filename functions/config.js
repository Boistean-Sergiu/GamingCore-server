// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }

const Joi = require('joi')

require('dotenv').config()

const envVarsSchema = Joi.object({
    ENV_STAGE: Joi.string().allow(['development', 'production', 'test', 'provision']).default('development'),
    API_KEY: Joi.string().required().description('Key for api'),
    DATABASE_NAME: Joi.string().required().description('Name of database'),
    PROJECT_ID: Joi.string().required().description('Id of project'),
    BUCKET: Joi.string().required().description('Storage name')
})

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema)
if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

const config = {
    env: envVars.ENV_STAGE,
    api_key: envVars.API_KEY,
    database_name: envVars.DATABASE_NAME,
    project_id: envVars.PROJECT_ID,
    bucket: envVars.BUCKET
}

module.exports = config
