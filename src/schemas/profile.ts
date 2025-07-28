import { Type } from '@sinclair/typebox';

export const ProfileBase = Type.Object({
  firstName: Type.String({ minLength: 1 }),
  lastName: Type.String({ minLength: 1 }),
  dateOfBirth: Type.String({ format: 'date' }),
});

export const ProfileCreate = ProfileBase;
export const ProfileUpdate = ProfileBase;

export const ProfileResponse = Type.Object({
  id: Type.String({ format: 'uuid' }),
  firstName: Type.String(),
  lastName: Type.String(),
  dateOfBirth: Type.String({ format: 'date' }),
  createdAt: Type.String({ format: 'date-time' }),
  updatedAt: Type.String({ format: 'date-time' })
});

export const ProfilesResponse = Type.Array(ProfileResponse);