find ./ -type f -exec sed -i -e 's|Disciple_Tools_Social_Media_Manager|Disciple_Tools_Social_Media_Manager|g' {} \;
find ./ -type f -exec sed -i -e 's|disciple_tools_social_media_manager|disciple_tools_social_media_manager|g' {} \;
find ./ -type f -exec sed -i -e 's|disciple-tools-social-media-manager|disciple-tools-social-media-manager|g' {} \;
find ./ -type f -exec sed -i -e 's|social_media_manager_post_type|social_media_manager_post_type|g' {} \;
find ./ -type f -exec sed -i -e 's|Social Media Manager Plugin|Social Media Manager Plugin|g' {} \;
mv disciple-tools-social-media-manager.php disciple-tools-social-media-manager.php
rm .rename.sh
