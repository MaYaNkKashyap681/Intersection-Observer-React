import React, { useState, useMemo } from 'react'
import LikeIconsWithCircle from '../icons/LikeIconsWithCircle'
import LovedWithCircleIcon from '../icons/LovedWithCircleIcon'
import LikeIcon from '../icons/LikeIcon'
import CommentIcon from '../icons/CommentIcon'
import RepostIcon from '../icons/RepostIcon'
import ShareIcon from '../icons/ShareIcon'
import IconAndText from '../icons/IconAndText'

const postsList = [
  "https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
]


const usersList = [
  {
    name: "Alexandra",
    img_src: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
  },
  {
    name: 'Gloria',
    img_src: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
  },
  {
    name: 'Dan',
    img_src: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: 'Natalie',
    img_src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  },
  {
    name: 'Alex',
    img_src: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
  }
]

const UserPosted = () => {

  const user = usersList[Math.round(Math.random() * 4)]
  return (
    <div className='flex w-full h-5 justify-between items-center py-8'>

      <div className='w-[70%] '>
        <div className='flex gap-x-2 items-center'>
          <img src={user.img_src}
            className='w-14 h-14 rounded-full object-cover' />
          <div className='flex flex-col max-w-[50%] leading-tight'>
            <h5 className='font-semibold text-md'>{user.name}</h5>
            <p className='text-[12px] whitespace-nowrap truncate'>Full Stack Developer | Frontend Enginner @Google | Ex-Frontend Engineer Meta</p>
            <p className='text-[14px] '>3h</p>
          </div>
        </div>
      </div>
      <div className='w-[30%] flex justify-end'>
        <p className='flex items-center text-blue-600 font-semibold cursor-pointer text-lg'><span className='text-3xl mb-[0.4rem]'>+</span>Follow</p>
      </div>
    </div>
  )
}



const PostInfo = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ullam id harum suscipit tempora labore, odio cum ipsa ea doloremque fugit illo beatae repellendus, dolores perspiciatis impedit repellat neque tenetur autem libero odit ipsum qui? Autem necessitatibus debitis enim quia, at repellendus cupiditate atque in quam labore nesciunt corporis numquam?'
  const textToShow = showFullText ? text : text.slice(0, 100);

  return (
    <div className='mt-4 w-full'>
      <p className='text-sm'>
        {textToShow}
      </p>
      <div className='flex justify-end mt-2'>
        <button
          className='text-gray-600 text-sm hover:underline'
          onClick={toggleTextVisibility}
        >
          {showFullText ? '' : '... see more'}
        </button>
      </div>
    </div>
  );
};


const LikesCommentsInfo = () => {
  return (
    <div className='pt-1 pb-2 px-4 mt-1'>
      <div className='flex justify-between w-full'>
        <div className='flex relative'>
          <LikeIconsWithCircle />
          <LovedWithCircleIcon />
          <span className='ml-4 text-sm text-gray-600'>104</span>
        </div>
        <div>
          <p className='text-sm text-gray-600'>35 comments</p>
        </div>
      </div>
      <div className='h-[0.3px] mt-2 bg-gray-300 w-full'>

      </div>
    </div>
  )
}

const PeopleCommented = () => {
  const userCommented = usersList[Math.round(Math.random() * 4)];
  return (
    <div className='px-3 pt-2 py-1'>
      <div className='flex gap-2 items-center'>
        <img src={userCommented.img_src} className='w-[30px] h-[30px] rounded-full' />
        <p className='text-[12px] text-gray-500'><span className='font-semibold text-[14px] text-[#000000]'>{userCommented.name} </span>commented on this</p>
      </div>

      <div className='h-[0.3px] mt-2 bg-gray-300 w-full'>

      </div>
    </div>
  )
}


const UtilityIcons = () => {
  const iconData = [
    { component: <LikeIcon />, text: "Like" },
    { component: <CommentIcon />, text: "Comment" },
    { component: <RepostIcon />, text: "Repost" },
    { component: <ShareIcon />, text: "Share" },
  ];

  return (
    <div className='flex items-center justify-around my-2'>
      {iconData.map((icon, index) => (
        <IconAndText text={icon.text} key={`${icon.text}`}>
          {icon.component}
        </IconAndText>
      ))}

    </div>
  )
}


const Post = ({ index }) => {
  const [postImageSrc] = useState(postsList[Math.round(Math.random() * 5)]);
  const post_image_src = useMemo(() => {
    return postImageSrc;
  }, [postImageSrc]);

  // Generate a random height within the desired range
  const minHeight = 18; // Minimum height in rem
  const maxHeight = 31; // Maximum height in rem
  const randomHeight = `${Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight}rem`;

  return (
    <div className='w-full bg-white md:rounded-lg shadow-xs border-gray-300 border-[0.5px]'>
      <PeopleCommented />
      <div className='py-1 px-4 w-full'>
        <div className='flex flex-col w-full'>
          <UserPosted />
          <PostInfo />
        </div>
      </div>
      <div className={`h-[${randomHeight}]`}>
        <img src={post_image_src} className='w-full h-full object-cover' />
      </div>
      <LikesCommentsInfo />
      <UtilityIcons />
    </div>
  );
}

export default Post