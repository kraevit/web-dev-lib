UPDATE wp_options SET option_value = replace(option_value, 'https://old-url.com', 'https://new-url.com') WHERE option_name = 'home' OR option_name = 'siteurl';

UPDATE wp_posts SET post_content = replace(post_content, 'https://old-url.com', 'https://new-url.com');

UPDATE wp_postmeta SET meta_value = replace(meta_value, 'https://old-url.com', 'https://new-url.com');