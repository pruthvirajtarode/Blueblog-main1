import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { requireAuth } from '@/lib/auth'

const schema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  imageId: z.string().optional().nullable(),
})

/* -------- UPDATE -------- */
export async function PUT(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth()
    const { id } = await ctx.params
    const body = schema.parse(await req.json())

    const category = await prisma.category.update({
      where: { id },
      data: {
        name: body.name,
        slug: body.slug,
        imageId: body.imageId || null,
      },
      include: {
        image: true,
        _count: { select: { posts: true } },
      },
    })

    return NextResponse.json({ message: 'Category updated', category })
  } catch (error: any) {
    console.error('Update category error:', error)
    return NextResponse.json(
      { message: error.message || 'Failed to update category' },
      { status: 500 }
    )
  }
}

/* -------- DELETE -------- */
export async function DELETE(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth()
    const { id } = await ctx.params

    await prisma.category.delete({ where: { id } })

    return NextResponse.json({ message: 'Category deleted' })
  } catch (error: any) {
    console.error('Delete category error:', error)
    return NextResponse.json(
      { message: error.message || 'Failed to delete category' },
      { status: 500 }
    )
  }
}
