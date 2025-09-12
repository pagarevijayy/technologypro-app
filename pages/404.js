import Layout from "../layouts/layout";
import Meta from "../components/meta";
import ContentSnippet from "../layouts/content-snippet";


export default function Custom404Page() {
    return (
        <>
            <Meta />
            <Layout>
                <ContentSnippet>
                    <div className="custom-404 text-center py-20 px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                            404
                        </h1>
                        <p className="text-xl md:text-2xl font-semibold text-gray-700  mb-4">
                            Page Not Found
                        </p>
                        <p className="text-gray-600  mb-8 max-w-prose mx-auto">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Go to Homepage
                        </a>
                    </div>
                </ContentSnippet>

            </Layout>
        </>
    );
}