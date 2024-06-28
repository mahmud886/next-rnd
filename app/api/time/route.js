// export const dynamic = 'force-dynamic'
export const revalidate = 10
export async function GET() {
  return new Response(new Date().toLocaleTimeString());
}