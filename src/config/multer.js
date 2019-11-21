// import multer from 'multer';
// import crypto from 'crypto';
// import { extname, resolve } from 'path';

// export default {
//     storage: multer.diskStorage({
//         destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
//         filename: (req, file, cb) => {
//             crypto.randomBytes(16, (err, res) => {
//                 if (err) return cb(err);

//                 return cb(
//                     null,
//                     res.toString('hex') + extname(file.originalname)
//                 );
//             });
//         },
//     }),
// };

import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            cb(
                null,
                `${file.fieldname}-${Date.now()}${path.extname(
                    file.originalname
                )}`
            );
        },
    }),
};
