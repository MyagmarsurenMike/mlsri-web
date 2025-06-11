import React from 'react';
import NavBar from '@/components/NavBar';
import FooterComp from '@/components/Footer';
import Image from 'next/image'; // For displaying post images
import Link from 'next/link'; // For linking to original posts

// Define a type for your post data (adjust based on what you fetch from Facebook)
interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string; // URL of an image associated with the post
  permalink_url: string; // Link to the original Facebook post
  // Add other fields you might need, e.g., attachments, story, etc.
}

// --- IMPORTANT ---
// This is a placeholder function. In a real application, this function
// would make an authenticated call to the Facebook Graph API.
// You would typically do this in a Server Component or an API route
// to keep your Access Token secure.
async function fetchFacebookPosts(): Promise<FacebookPost[]> {
  // const PAGE_ID = 'YOUR_FACEBOOK_PAGE_ID';
  // const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN; // Store securely!

  // if (!ACCESS_TOKEN || !PAGE_ID) {
  //   console.error('Facebook Page ID or Access Token is not configured.');
  //   return [];
  // }

  // const fields = 'id,message,created_time,full_picture,permalink_url,attachments';
  // const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=${fields}&access_token=${ACCESS_TOKEN}&limit=10`;

  try {
    // const response = await fetch(url);
    // if (!response.ok) {
    //   console.error('Failed to fetch Facebook posts:', await response.text());
    //   return [];
    // }
    // const data = await response.json();
    // return data.data || []; // The posts are usually in the 'data' array

    // --- MOCK DATA FOR DEMONSTRATION ---
    // Replace this with actual API call logic
    console.log("Fetching mock Facebook posts. Implement actual API call.");
    return [
      {
        id: '12345_67890',
        message: 'This is a sample Facebook post! Check out our latest news and updates. #FacebookAPI #NextJS',
        created_time: new Date().toISOString(),
        full_picture: 'https://via.placeholder.com/600x400.png?text=Post+Image+1',
        permalink_url: '#',
      },
      {
        id: '12345_67891',
        message: 'Another exciting update from our page. We are thrilled to share this with you all. Learn more by clicking the link!',
        created_time: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        // full_picture: 'https://via.placeholder.com/600x400.png?text=Post+Image+2',
        permalink_url: '#',
      },
      {
        id: '12345_67892',
        message: 'Just a short update today.',
        created_time: new Date(Date.now() - 172800000).toISOString(), // Two days ago
        full_picture: 'https://via.placeholder.com/600x400.png?text=Post+Image+3',
        permalink_url: '#',
      },
    ];
    // --- END OF MOCK DATA ---

  } catch (error) {
    console.error('Error fetching Facebook posts:', error);
    return [];
  }
}

export default async function NewsPage() {
  const posts = await fetchFacebookPosts();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />

      <main className="flex-grow px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Сүүлийн Мэдээ (Facebook)
          </h1>

          {posts && posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  {post.full_picture && (
                    <div className="mb-4 overflow-hidden rounded-md">
                      <Image
                        src={post.full_picture}
                        alt="Post image"
                        width={600} // Adjust as needed
                        height={400} // Adjust as needed
                        className="w-full h-auto object-cover"
                        priority={posts.indexOf(post) < 2} // Prioritize loading images for first few posts
                      />
                    </div>
                  )}
                  {post.message && (
                    <p className="text-gray-700 mb-3 whitespace-pre-line">
                      {post.message}
                    </p>
                  )}
                  <div className="text-sm text-gray-500 mb-3">
                    Нийтэлсэн: {new Date(post.created_time).toLocaleString('mn-MN', { dateStyle: 'long', timeStyle: 'short' })}
                  </div>
                  <Link href={post.permalink_url} target="_blank" rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    Facebook дээр үзэх
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Мэдээ олдсонгүй эсвэл Facebook-с татаж чадсангүй.</p>
          )}
        </div>
      </main>

      <FooterComp />
    </div>
  );
}

// Optional: Add metadata for the page
export const metadata = {
  title: 'Сүүлийн Мэдээ | Манай Пэйж',
  description: 'Манай Facebook пэйжийн сүүлийн үеийн мэдээ, мэдээлэл.',
};