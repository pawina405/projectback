const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database bookings-online')
  await prisma.$executeRawUnsafe('CREATE Database bookings-online')
}
console.log('Reset DB')
run()