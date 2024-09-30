import { draftMode, cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { client } from "../../lib/contentful/client";


const { CONTENTFUL_PREVIEW_KEY } = process.env;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    if (searchParams.get("secret") !== CONTENTFUL_PREVIEW_KEY) {
      return new Response("Invalid token", { status: 401 });
    }

    // const slug = searchParams.get("slug");
    // const pageType = searchParams.get("type");

    draftMode().enable();

    // const secret = searchParams.get('secret');


    // console.log('Received secret:', secret);
    // console.log('Received slug:', slug);

    // if (!secret || !slug) {
    //     return new Response('Missing parameters', { status: 400 });
    // }

    // if (secret !== process.env.CONTENTFUL_PREVIEW_KEY) {
    //     return new Response('Invalid token', { status: 401 });
    // }

    const cookieStore = cookies();
    const cookie = cookieStore.get("__prerender_bypass")!;
    const draftValue = cookie?.value;
    if (draftValue) {
      cookies().set({
        name: "__prerender_bypass",
        value: draftValue,
        httpOnly: true,
        path: "/",
        secure: true,
        sameSite: "none",
      });
    }

    // Redirect to the slug URL (preview page)
    // redirect(slug);
    return new Response("Preview mode enabled", { status: 200 });
    // let redirectTo = `/${slug}`;
    // redirect(redirectTo);
}
