import {PrismaClient} from '@prisma/client';
import {v4 as uuid} from 'uuid';

const prisma = new PrismaClient();

async function main() {
    const alice = await prisma.user.upsert({
        where: {email: 'alice@testuser.com'},
        update: {},
        create: {
            email: 'alice@testuser.com',
            name: 'Alice',
      createdTodos: {
        create: {
          id: uuid(),
          title: 'Take out the trash.'
        }
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@testuser.com' },
    update: {},
    create: {
      email: 'bob@testuser.com',
      name: 'Bob',
      createdTodos: {
        create: {
          id: uuid(),
          title: 'Feed some animals.'
        }
      }
    },
  });

  console.log(alice, bob);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });