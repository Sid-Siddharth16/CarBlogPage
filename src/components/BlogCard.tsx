import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types';
import { getUser } from '../api/car-api';

type Props = {
  post: Post;
};

export default async function BlogCard({ post }: Props) {
  const user = await getUser(post.userId.toString());

  return (
    <Link href={`/post/${post.id}`} className="block w-full mb-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full">
        <Image
          src={`https://source.unsplash.com/1600x900/?car,${post.id}`}
          alt={post.title}
          width={400}
          height={225}
          className="w-full h-40 sm:h-56 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors">{post.title}</h2>
        <p className="text-gray-600 mb-2 text-sm sm:text-base">{post.body.substring(0, 100)}...</p>
        <p className="text-gray-500 text-xs sm:text-sm">By {user?.name}</p>
      </div>
    </Link>
  );
}