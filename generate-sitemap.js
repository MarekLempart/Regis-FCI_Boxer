import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'http://www.regis-bokser.pl' });

const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/achievements', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

pages.forEach((page) => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap)
    .then((data) => {
        createWriteStream('./public/sitemap.xml').write(data);
        console.log('Sitemap generated successfully!');
    })
    .catch((error) => console.error(error));
