import { FastifyInstance } from 'fastify';
import { ProfileCreate, ProfileUpdate, ProfilesResponse, ProfileResponse } from '../schemas/profile.js';
import {
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfile
} from '../services/profiles.js';

export default async function profilesRoutes(fastify: FastifyInstance) {
  fastify.get('/profiles', {
    schema: { response: { 200: ProfilesResponse } },
    handler: getAllProfiles(fastify)
  });

  fastify.get('/profiles/:id', {
    schema: {
      params: {
        type: 'object',
        properties: { id: { type: 'string', format: 'uuid' } },
        required: ['id']
      },
      response: {
        200: ProfileResponse,
        404: { type: 'object', properties: { message: { type: 'string' } } }
      }
    },
    handler: getProfileById(fastify)
  });

  fastify.post('/profiles', {
    schema: {
      body: ProfileCreate,
      response: { 201: ProfileResponse }
    },
    handler: createProfile(fastify)
  });

  fastify.put('/profiles/:id', {
    schema: {
      params: {
        type: 'object',
        properties: { id: { type: 'string', format: 'uuid' } },
        required: ['id']
      },
      body: ProfileUpdate,
      response: {
        200: ProfileResponse,
        404: { type: 'object', properties: { message: { type: 'string' } } }
      }
    },
    handler: updateProfile(fastify)
  });
}
