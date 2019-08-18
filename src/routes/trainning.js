import { Router } from 'express';

const router = Router();
const path = require('path')
import {PythonShell} from 'python-shell';

// /**
//  * Run python script, pass in `-u` to not buffer console output 
//  * @return {ChildProcess}
//  */
// function runScript() {
//   return spawn('python', [
//     "-u",
//     path.join(__dirname, '../core/face_dataset.py'),
//     "--foo", "some value for foo",
//   ]);
// }

// let options = {
//     mode: 'text',
//     pythonPath: 'path/to/python',
//     pythonOptions: ['-u'], // get print results in real-time
//     scriptPath: 'path/to/my/scripts',
//     args: ['value1', 'value2', 'value3']
//   };

router.get('/datasets', (req, res) => {
    PythonShell.run(path.join(__dirname, '../core/test.py'), null, function (err) {
        if (err) throw err;
        console.log('finished');
      });
  //return res.send(req.context.modls.users[req.params.userId]);
});

export default router;