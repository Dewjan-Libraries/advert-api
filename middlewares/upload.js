import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

// export const localUpload = multer({dest: '/uploads'});



export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVE_FILES,
        relativePath: '/adverts_api/adverts/*' 
    }),
    preservePath: true
});

export const vendorAvatarUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVE_FILES,
        relativePath: '/adverts_api/vendor/avatar/*'
    }),
    preservePath: true
})