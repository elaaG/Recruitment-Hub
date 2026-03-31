import * as dotenv from 'dotenv';
dotenv.config();

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { mockCandidates } from '../src/data/candidates';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });


async function main() {
  for (const c of mockCandidates) {
    await prisma.candidate.create({
      data: {
        id: c.id,
        name: c.name,
        email: c.email,
        phone: c.phone ?? null,
        school: c.school,
        source: c.source,
        status: c.status,
        appliedDate: new Date(c.appliedDate),
        cvUrl: c.cvUrl ?? null,
        aiScore: c.aiAnalysis.score,
        aiProfile: c.aiAnalysis.profileType,
        aiLevel: c.aiAnalysis.level,
        aiSkills: c.aiAnalysis.skills,
        aiStrengths: c.aiAnalysis.strengths,
        aiWeaknesses: c.aiAnalysis.weaknesses,
        aiRecommendation: c.aiAnalysis.recommendation,
        projects: {
          create: c.projects.map(projectName => ({
            name: projectName,
            description: null,
            tech: []
          }))
        }
      }
    });
  }
  console.log(' Seeded successfully');
}

main().catch(console.error).finally(() => prisma.$disconnect());