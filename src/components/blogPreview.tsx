import React from 'react';
import Image from 'next/image';
import style from './blogPreview.module.css'

interface BlogProps {
  title : string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export default function BlogPreview({title, date, description, image, imageAlt, slug}: BlogProps) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogBlock}>
        <div className={style.blogDiv}>
          <a className={style.blogLink} href={'blogs/' + slug}><h1 className={style.blogTitle}>{title}</h1></a>
          <p>{description}</p>
          <p>{date.toString()}</p>
          <a className={style.blogLink} href={'blogs/' + slug}>
            <Image className={style.blogImg} src={image} alt={imageAlt} width={500} height={500}/>
          </a>
        </div>
    </div>
  );
}