import { Router } from 'express';

const router = Router();
const path = require('path')
const { spawn } = require('child_process')

/**
 * Run python script, pass in `-u` to not buffer console output 
 * @return {ChildProcess}
 */
function runScript() {
  return spawn('python', [
    "-u",
    path.join(__dirname, '../core/test.py'),
    "--foo", "some value for foo",
  ]);
}
const subprocess = runScript()
router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get('/training', (req, res) => {
  
  res.set('Content-Type', 'text/plain');
  subprocess.stdout.pipe(res);
  //return res.send(req.context.models.users[req.params.userId]);
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;
