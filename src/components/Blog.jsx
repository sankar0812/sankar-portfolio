// src/components/Blog.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const blogs = [
  {
    title: 'Secure File Upload Project',
    date: 'May 2025',
    techstack: 'React, NestJS, MongoDB, AWS S3, HashiCorp Vault',
    summary: 'Built a web application that allows users to upload images,which are stored in MongoDB and AWS S3 using a React frontend and NestJS backend.Integrated HashiCorp Vault to securely manage and encrypt sensitive credentials and file metadata.',
    link: 'https://s3-mongodb-file-upload.vercel.app/',
    
  },
//   {
//     title: 'CI/CD Pipeline Using GitLab & AWS',
//     date: 'April 2025',
//     summary: 'Step-by-step to build, scan, and deploy using GitLab CI/CD, SonarQube, and AWS.',
//     link: 'https://your-blog-link.com/cicd-gitlab-aws',
//   },
];

const Blog = () => {
  return (
    <div className="mt-12">
      <motion.div variants={{}}>
        <p className={`${styles.sectionSubText}`}>My Articles</p>
        <h2 className={`${styles.sectionHeadText}`}>Blog</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black dark:text-white">{blog.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{blog.date}</p>
            <p className="mt-2 text-gray-800 dark:text-gray-300">{blog.summary}</p>
            <p className="mt-2 text-gray-800 dark:text-gray-300">{blog.techstack}</p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
