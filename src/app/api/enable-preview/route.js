// import { cookies, draftMode } from 'next/headers';
import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

export async function GET(request) {
    console.log('enable-preview API called');
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const slug = searchParams.get('slug');

    console.log('Received secret:', secret);
    console.log('Received slug:', slug);

    if (!secret || !slug) {
        return new Response('Missing parameters', { status: 400 });
    }

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
        return new Response('Invalid token', { status: 401 });
    }
    // res.setDraftMode({ enable: true })
    // res.end('Draft mode is enabled')

    const cookieStore = cookies();
    const cookie = cookieStore.get('__prerender_bypass');
    cookies().set({
        name: '__prerender_bypass',
        value: cookie?.value,
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'none'
    });

    // Redirect to the slug URL (preview page)
    // redirect(slug);
    return new Response(`Preview enabled for slug: ${slug}`);
}
