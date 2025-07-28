import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { Static } from '@sinclair/typebox';
import { ProfileCreate, ProfileUpdate } from '../schemas/profile.js';

type CreateProfileBody = Static<typeof ProfileCreate>;
type UpdateProfileBody = Static<typeof ProfileUpdate>;

export const getAllProfiles = (fastify: FastifyInstance) => async () => {
  return fastify.prisma.profile.findMany({
    orderBy: { createdAt: 'desc' }
  });
};

export const getProfileById = (fastify: FastifyInstance) =>
  async (req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) => {
    const { id } = req.params;
    const profile = await fastify.prisma.profile.findUnique({ where: { id } });
    if (!profile) return res.code(404).send({ message: 'Profile not found' });
    return profile;
  };

export const createProfile = (fastify: FastifyInstance) => async (req: FastifyRequest<{ Body: CreateProfileBody }>, res: FastifyReply) => {
  const { firstName, lastName, dateOfBirth } = req.body;
  const profile = await fastify.prisma.profile.create({
    data: {
      firstName,
      lastName,
      dateOfBirth: new Date(dateOfBirth)
    }
  });
  res.code(201);
  return profile;
};

export const updateProfile = (fastify: FastifyInstance) => async (req: FastifyRequest<{
      Params: { id: string };
      Body: UpdateProfileBody
    }>,
    res: FastifyReply) => {
  const { id } = req.params as { id: string };
  const { firstName, lastName, dateOfBirth } = req.body as any;
  try {
    return await fastify.prisma.profile.update({
      where: { id },
      data: { firstName, lastName, dateOfBirth: new Date(dateOfBirth) }
    });
  } catch {
    return res.code(404).send({ message: 'Profile not found' });
  }
};
