/************************ 
 * Mental_Rotation Test *
 ************************/


// store info about the experiment session:
let expName = 'Mental_Rotation';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr_practiceRoutineBegin());
flowScheduler.add(instr_practiceRoutineEachFrame());
flowScheduler.add(instr_practiceRoutineEnd());
const practicesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practicesLoopBegin(practicesLoopScheduler));
flowScheduler.add(practicesLoopScheduler);
flowScheduler.add(practicesLoopEnd);
flowScheduler.add(instr_expRoutineBegin());
flowScheduler.add(instr_expRoutineEachFrame());
flowScheduler.add(instr_expRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/2_0.jpg', 'path': 'stimuli/2_0.jpg'},
    {'name': 'stimuli/3_150_R.jpg', 'path': 'stimuli/3_150_R.jpg'},
    {'name': 'stimuli/17_0_R.jpg', 'path': 'stimuli/17_0_R.jpg'},
    {'name': 'stimuli/20_100_R.jpg', 'path': 'stimuli/20_100_R.jpg'},
    {'name': 'stimuli/14_150.jpg', 'path': 'stimuli/14_150.jpg'},
    {'name': 'stimuli/21_50.jpg', 'path': 'stimuli/21_50.jpg'},
    {'name': 'stimuli/19_100_R.jpg', 'path': 'stimuli/19_100_R.jpg'},
    {'name': 'stimuli/16_50_R.jpg', 'path': 'stimuli/16_50_R.jpg'},
    {'name': 'stimuli/2_50_R.jpg', 'path': 'stimuli/2_50_R.jpg'},
    {'name': 'stimuli/12_0_R.jpg', 'path': 'stimuli/12_0_R.jpg'},
    {'name': 'stimuli/16_100_R.jpg', 'path': 'stimuli/16_100_R.jpg'},
    {'name': 'stimuli/19_0.jpg', 'path': 'stimuli/19_0.jpg'},
    {'name': 'stimuli/10_150.jpg', 'path': 'stimuli/10_150.jpg'},
    {'name': 'stimuli/20_0.jpg', 'path': 'stimuli/20_0.jpg'},
    {'name': 'stimuli/15_50.jpg', 'path': 'stimuli/15_50.jpg'},
    {'name': 'stimuli/21_0_R.jpg', 'path': 'stimuli/21_0_R.jpg'},
    {'name': 'stimuli/19_150_R.jpg', 'path': 'stimuli/19_150_R.jpg'},
    {'name': 'stimuli/14_150_R.jpg', 'path': 'stimuli/14_150_R.jpg'},
    {'name': 'stimuli/21_50_R.jpg', 'path': 'stimuli/21_50_R.jpg'},
    {'name': 'stimuli/19_0_R.jpg', 'path': 'stimuli/19_0_R.jpg'},
    {'name': 'instruction/instr_exp.jpg', 'path': 'instruction/instr_exp.jpg'},
    {'name': 'stimuli/14_100_R.jpg', 'path': 'stimuli/14_100_R.jpg'},
    {'name': 'stimuli/20_0_R.jpg', 'path': 'stimuli/20_0_R.jpg'},
    {'name': 'stimuli/2_100.jpg', 'path': 'stimuli/2_100.jpg'},
    {'name': 'stimuli/15_0_R.jpg', 'path': 'stimuli/15_0_R.jpg'},
    {'name': 'stimuli/20_150.jpg', 'path': 'stimuli/20_150.jpg'},
    {'name': 'stimuli/16_150_R.jpg', 'path': 'stimuli/16_150_R.jpg'},
    {'name': 'stimuli/12_150.jpg', 'path': 'stimuli/12_150.jpg'},
    {'name': 'stimuli/11_0_R.jpg', 'path': 'stimuli/11_0_R.jpg'},
    {'name': 'stimuli/16_100.jpg', 'path': 'stimuli/16_100.jpg'},
    {'name': 'stimuli/4_150_R.jpg', 'path': 'stimuli/4_150_R.jpg'},
    {'name': 'stimuli/11_0.jpg', 'path': 'stimuli/11_0.jpg'},
    {'name': 'stimuli/21_0.jpg', 'path': 'stimuli/21_0.jpg'},
    {'name': 'stimuli/10_0_R.jpg', 'path': 'stimuli/10_0_R.jpg'},
    {'name': 'condition/practice.xlsx', 'path': 'condition/practice.xlsx'},
    {'name': 'stimuli/18_150_R.jpg', 'path': 'stimuli/18_150_R.jpg'},
    {'name': 'stimuli/16_50.jpg', 'path': 'stimuli/16_50.jpg'},
    {'name': 'stimuli/17_150.jpg', 'path': 'stimuli/17_150.jpg'},
    {'name': 'stimuli/4_100_R.jpg', 'path': 'stimuli/4_100_R.jpg'},
    {'name': 'stimuli/19_100.jpg', 'path': 'stimuli/19_100.jpg'},
    {'name': 'stimuli/15_50_R.jpg', 'path': 'stimuli/15_50_R.jpg'},
    {'name': 'stimuli/14_0_R.jpg', 'path': 'stimuli/14_0_R.jpg'},
    {'name': 'stimuli/13_50_R.jpg', 'path': 'stimuli/13_50_R.jpg'},
    {'name': 'stimuli/13_150_R.jpg', 'path': 'stimuli/13_150_R.jpg'},
    {'name': 'stimuli/11_100.jpg', 'path': 'stimuli/11_100.jpg'},
    {'name': 'stimuli/3_0.jpg', 'path': 'stimuli/3_0.jpg'},
    {'name': 'stimuli/21_100.jpg', 'path': 'stimuli/21_100.jpg'},
    {'name': 'stimuli/17_100.jpg', 'path': 'stimuli/17_100.jpg'},
    {'name': 'stimuli/12_50_R.jpg', 'path': 'stimuli/12_50_R.jpg'},
    {'name': 'stimuli/3_50.jpg', 'path': 'stimuli/3_50.jpg'},
    {'name': 'stimuli/15_100_R.jpg', 'path': 'stimuli/15_100_R.jpg'},
    {'name': 'stimuli/12_150_R.jpg', 'path': 'stimuli/12_150_R.jpg'},
    {'name': 'stimuli/18_100.jpg', 'path': 'stimuli/18_100.jpg'},
    {'name': 'stimuli/11_50.jpg', 'path': 'stimuli/11_50.jpg'},
    {'name': 'stimuli/18_50_R.jpg', 'path': 'stimuli/18_50_R.jpg'},
    {'name': 'stimuli/15_0.jpg', 'path': 'stimuli/15_0.jpg'},
    {'name': 'stimuli/4_0_R.jpg', 'path': 'stimuli/4_0_R.jpg'},
    {'name': 'stimuli/20_100.jpg', 'path': 'stimuli/20_100.jpg'},
    {'name': 'stimuli/18_100_R.jpg', 'path': 'stimuli/18_100_R.jpg'},
    {'name': 'stimuli/13_0.jpg', 'path': 'stimuli/13_0.jpg'},
    {'name': 'stimuli/10_0.jpg', 'path': 'stimuli/10_0.jpg'},
    {'name': 'stimuli/3_100.jpg', 'path': 'stimuli/3_100.jpg'},
    {'name': 'stimuli/20_150_R.jpg', 'path': 'stimuli/20_150_R.jpg'},
    {'name': 'stimuli/14_100.jpg', 'path': 'stimuli/14_100.jpg'},
    {'name': 'stimuli/15_150.jpg', 'path': 'stimuli/15_150.jpg'},
    {'name': 'stimuli/2_0_R.jpg', 'path': 'stimuli/2_0_R.jpg'},
    {'name': 'condition/exp.xlsx', 'path': 'condition/exp.xlsx'},
    {'name': 'stimuli/18_150.jpg', 'path': 'stimuli/18_150.jpg'},
    {'name': 'stimuli/13_100.jpg', 'path': 'stimuli/13_100.jpg'},
    {'name': 'stimuli/2_50.jpg', 'path': 'stimuli/2_50.jpg'},
    {'name': 'stimuli/4_50.jpg', 'path': 'stimuli/4_50.jpg'},
    {'name': 'stimuli/14_50_R.jpg', 'path': 'stimuli/14_50_R.jpg'},
    {'name': 'stimuli/13_150.jpg', 'path': 'stimuli/13_150.jpg'},
    {'name': 'stimuli/21_150_R.jpg', 'path': 'stimuli/21_150_R.jpg'},
    {'name': 'stimuli/14_50.jpg', 'path': 'stimuli/14_50.jpg'},
    {'name': 'stimuli/11_50_R.jpg', 'path': 'stimuli/11_50_R.jpg'},
    {'name': 'stimuli/13_50.jpg', 'path': 'stimuli/13_50.jpg'},
    {'name': 'stimuli/4_0.jpg', 'path': 'stimuli/4_0.jpg'},
    {'name': 'stimuli/13_100_R.jpg', 'path': 'stimuli/13_100_R.jpg'},
    {'name': 'instruction/instr_practice.jpg', 'path': 'instruction/instr_practice.jpg'},
    {'name': 'stimuli/17_50_R.jpg', 'path': 'stimuli/17_50_R.jpg'},
    {'name': 'stimuli/12_0.jpg', 'path': 'stimuli/12_0.jpg'},
    {'name': 'stimuli/2_150.jpg', 'path': 'stimuli/2_150.jpg'},
    {'name': 'stimuli/2_150_R.jpg', 'path': 'stimuli/2_150_R.jpg'},
    {'name': 'stimuli/10_150_R.jpg', 'path': 'stimuli/10_150_R.jpg'},
    {'name': 'stimuli/14_0.jpg', 'path': 'stimuli/14_0.jpg'},
    {'name': 'stimuli/3_0_R.jpg', 'path': 'stimuli/3_0_R.jpg'},
    {'name': 'stimuli/21_150.jpg', 'path': 'stimuli/21_150.jpg'},
    {'name': 'stimuli/2_100_R.jpg', 'path': 'stimuli/2_100_R.jpg'},
    {'name': 'stimuli/3_150.jpg', 'path': 'stimuli/3_150.jpg'},
    {'name': 'stimuli/13_0_R.jpg', 'path': 'stimuli/13_0_R.jpg'},
    {'name': 'stimuli/19_50_R.jpg', 'path': 'stimuli/19_50_R.jpg'},
    {'name': 'stimuli/11_150_R.jpg', 'path': 'stimuli/11_150_R.jpg'},
    {'name': 'stimuli/3_100_R.jpg', 'path': 'stimuli/3_100_R.jpg'},
    {'name': 'stimuli/18_0.jpg', 'path': 'stimuli/18_0.jpg'},
    {'name': 'stimuli/4_100.jpg', 'path': 'stimuli/4_100.jpg'},
    {'name': 'stimuli/10_50.jpg', 'path': 'stimuli/10_50.jpg'},
    {'name': 'stimuli/19_50.jpg', 'path': 'stimuli/19_50.jpg'},
    {'name': 'stimuli/12_100.jpg', 'path': 'stimuli/12_100.jpg'},
    {'name': 'stimuli/4_50_R.jpg', 'path': 'stimuli/4_50_R.jpg'},
    {'name': 'stimuli/17_0.jpg', 'path': 'stimuli/17_0.jpg'},
    {'name': 'stimuli/4_150.jpg', 'path': 'stimuli/4_150.jpg'},
    {'name': 'stimuli/16_0_R.jpg', 'path': 'stimuli/16_0_R.jpg'},
    {'name': 'stimuli/10_100.jpg', 'path': 'stimuli/10_100.jpg'},
    {'name': 'stimuli/20_50_R.jpg', 'path': 'stimuli/20_50_R.jpg'},
    {'name': 'stimuli/11_100_R.jpg', 'path': 'stimuli/11_100_R.jpg'},
    {'name': 'stimuli/18_50.jpg', 'path': 'stimuli/18_50.jpg'},
    {'name': 'stimuli/10_100_R.jpg', 'path': 'stimuli/10_100_R.jpg'},
    {'name': 'stimuli/21_100_R.jpg', 'path': 'stimuli/21_100_R.jpg'},
    {'name': 'stimuli/17_100_R.jpg', 'path': 'stimuli/17_100_R.jpg'},
    {'name': 'stimuli/11_150.jpg', 'path': 'stimuli/11_150.jpg'},
    {'name': 'stimuli/17_150_R.jpg', 'path': 'stimuli/17_150_R.jpg'},
    {'name': 'feedback/correct.png', 'path': 'feedback/correct.png'},
    {'name': 'stimuli/19_150.jpg', 'path': 'stimuli/19_150.jpg'},
    {'name': 'stimuli/10_50_R.jpg', 'path': 'stimuli/10_50_R.jpg'},
    {'name': 'feedback/incorrect.png', 'path': 'feedback/incorrect.png'},
    {'name': 'stimuli/17_50.jpg', 'path': 'stimuli/17_50.jpg'},
    {'name': 'stimuli/12_100_R.jpg', 'path': 'stimuli/12_100_R.jpg'},
    {'name': 'stimuli/20_50.jpg', 'path': 'stimuli/20_50.jpg'},
    {'name': 'stimuli/15_100.jpg', 'path': 'stimuli/15_100.jpg'},
    {'name': 'stimuli/12_50.jpg', 'path': 'stimuli/12_50.jpg'},
    {'name': 'stimuli/16_0.jpg', 'path': 'stimuli/16_0.jpg'},
    {'name': 'stimuli/16_150.jpg', 'path': 'stimuli/16_150.jpg'},
    {'name': 'stimuli/3_50_R.jpg', 'path': 'stimuli/3_50_R.jpg'},
    {'name': 'stimuli/15_150_R.jpg', 'path': 'stimuli/15_150_R.jpg'},
    {'name': 'stimuli/18_0_R.jpg', 'path': 'stimuli/18_0_R.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instr_practiceClock;
var instr_practice_image;
var instr_practice_key_resp;
var ITIClock;
var blank_text;
var trialClock;
var response;
var trial_image;
var feed_backClock;
var last_stimuli_image;
var feedback_image;
var instr_expClock;
var instr_exp_image;
var instr_exp_key_resp;
var endClock;
var end_text;
var end_key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr_practice"
  instr_practiceClock = new util.Clock();
  instr_practice_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_practice_image', units : undefined, 
    image : 'instruction/instr_practice.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.778, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  instr_practice_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  blank_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trial_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.8, 0.427],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "feed_back"
  feed_backClock = new util.Clock();
  last_stimuli_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'last_stimuli_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.8, 0.427],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  feedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.3)], size : [0.15, 0.059],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instr_exp"
  instr_expClock = new util.Clock();
  instr_exp_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_exp_image', units : undefined, 
    image : 'instruction/instr_exp.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.778, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  instr_exp_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '测试结束！\n\n按空格键退出测试',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  end_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _instr_practice_key_resp_allKeys;
var instr_practiceComponents;
function instr_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr_practice'-------
    t = 0;
    instr_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_practice_key_resp.keys = undefined;
    instr_practice_key_resp.rt = undefined;
    _instr_practice_key_resp_allKeys = [];
    // keep track of which components have finished
    instr_practiceComponents = [];
    instr_practiceComponents.push(instr_practice_image);
    instr_practiceComponents.push(instr_practice_key_resp);
    
    instr_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr_practice'-------
    // get current time
    t = instr_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_practice_image* updates
    if (t >= 0.0 && instr_practice_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_practice_image.tStart = t;  // (not accounting for frame time here)
      instr_practice_image.frameNStart = frameN;  // exact frame index
      
      instr_practice_image.setAutoDraw(true);
    }

    
    // *instr_practice_key_resp* updates
    if (t >= 0.0 && instr_practice_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_practice_key_resp.tStart = t;  // (not accounting for frame time here)
      instr_practice_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_practice_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_practice_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_practice_key_resp.clearEvents(); });
    }

    if (instr_practice_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_practice_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr_practice_key_resp_allKeys = _instr_practice_key_resp_allKeys.concat(theseKeys);
      if (_instr_practice_key_resp_allKeys.length > 0) {
        instr_practice_key_resp.keys = _instr_practice_key_resp_allKeys[_instr_practice_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_practice_key_resp.rt = _instr_practice_key_resp_allKeys[_instr_practice_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr_practice'-------
    instr_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_practice_key_resp.keys', instr_practice_key_resp.keys);
    if (typeof instr_practice_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_practice_key_resp.rt', instr_practice_key_resp.rt);
        routineTimer.reset();
        }
    
    instr_practice_key_resp.stop();
    // the Routine "instr_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practices;
var currentLoop;
function practicesLoopBegin(practicesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practices = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition/practice.xlsx',
      seed: undefined, name: 'practices'
    });
    psychoJS.experiment.addLoop(practices); // add the loop to the experiment
    currentLoop = practices;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practices.forEach(function() {
      const snapshot = practices.getSnapshot();
    
      practicesLoopScheduler.add(importConditions(snapshot));
      practicesLoopScheduler.add(ITIRoutineBegin(snapshot));
      practicesLoopScheduler.add(ITIRoutineEachFrame());
      practicesLoopScheduler.add(ITIRoutineEnd());
      practicesLoopScheduler.add(trialRoutineBegin(snapshot));
      practicesLoopScheduler.add(trialRoutineEachFrame());
      practicesLoopScheduler.add(trialRoutineEnd());
      practicesLoopScheduler.add(feed_backRoutineBegin(snapshot));
      practicesLoopScheduler.add(feed_backRoutineEachFrame());
      practicesLoopScheduler.add(feed_backRoutineEnd());
      practicesLoopScheduler.add(endLoopIteration(practicesLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practicesLoopEnd() {
  psychoJS.experiment.removeLoop(practices);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition/exp.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      trialsLoopScheduler.add(ITIRoutineEachFrame());
      trialsLoopScheduler.add(ITIRoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ITI'-------
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(blank_text);
    
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ITIRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ITI'-------
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank_text* updates
    if (t >= 0.0 && blank_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_text.tStart = t;  // (not accounting for frame time here)
      blank_text.frameNStart = frameN;  // exact frame index
      
      blank_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd() {
  return async function () {
    //------Ending Routine 'ITI'-------
    ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _response_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.500000);
    // update component parameters for each repeat
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    trial_image.setImage(pic_file);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(response);
    trialComponents.push(trial_image);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response* updates
    if (t >= 0.0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }

    frameRemains = 0.0 + 7.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response.status = PsychoJS.Status.FINISHED;
  }

    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        // was this correct?
        if (response.keys == corrAns) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trial_image* updates
    if (t >= 0.0 && trial_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_image.tStart = t;  // (not accounting for frame time here)
      trial_image.frameNStart = frameN;  // exact frame index
      
      trial_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        routineTimer.reset();
        }
    
    response.stop();
    return Scheduler.Event.NEXT;
  };
}


var feedback_pic;
var feed_backComponents;
function feed_backRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feed_back'-------
    t = 0;
    feed_backClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    if (response.corr) {
        feedback_pic = "feedback/correct.png";
    } else {
        feedback_pic = "feedback/incorrect.png";
    }
    
    last_stimuli_image.setImage(pic_file);
    feedback_image.setImage(feedback_pic);
    // keep track of which components have finished
    feed_backComponents = [];
    feed_backComponents.push(last_stimuli_image);
    feed_backComponents.push(feedback_image);
    
    feed_backComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feed_backRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feed_back'-------
    // get current time
    t = feed_backClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *last_stimuli_image* updates
    if (t >= 0.0 && last_stimuli_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_stimuli_image.tStart = t;  // (not accounting for frame time here)
      last_stimuli_image.frameNStart = frameN;  // exact frame index
      
      last_stimuli_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (last_stimuli_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      last_stimuli_image.setAutoDraw(false);
    }
    
    // *feedback_image* updates
    if (t >= 0.0 && feedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_image.tStart = t;  // (not accounting for frame time here)
      feedback_image.frameNStart = frameN;  // exact frame index
      
      feedback_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feed_backComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feed_backRoutineEnd() {
  return async function () {
    //------Ending Routine 'feed_back'-------
    feed_backComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _instr_exp_key_resp_allKeys;
var instr_expComponents;
function instr_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instr_exp'-------
    t = 0;
    instr_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_exp_key_resp.keys = undefined;
    instr_exp_key_resp.rt = undefined;
    _instr_exp_key_resp_allKeys = [];
    // keep track of which components have finished
    instr_expComponents = [];
    instr_expComponents.push(instr_exp_image);
    instr_expComponents.push(instr_exp_key_resp);
    
    instr_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_expRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instr_exp'-------
    // get current time
    t = instr_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_exp_image* updates
    if (t >= 0.0 && instr_exp_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_exp_image.tStart = t;  // (not accounting for frame time here)
      instr_exp_image.frameNStart = frameN;  // exact frame index
      
      instr_exp_image.setAutoDraw(true);
    }

    
    // *instr_exp_key_resp* updates
    if (t >= 0.0 && instr_exp_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_exp_key_resp.tStart = t;  // (not accounting for frame time here)
      instr_exp_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_exp_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_exp_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_exp_key_resp.clearEvents(); });
    }

    if (instr_exp_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_exp_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr_exp_key_resp_allKeys = _instr_exp_key_resp_allKeys.concat(theseKeys);
      if (_instr_exp_key_resp_allKeys.length > 0) {
        instr_exp_key_resp.keys = _instr_exp_key_resp_allKeys[_instr_exp_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_exp_key_resp.rt = _instr_exp_key_resp_allKeys[_instr_exp_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_expRoutineEnd() {
  return async function () {
    //------Ending Routine 'instr_exp'-------
    instr_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_exp_key_resp.keys', instr_exp_key_resp.keys);
    if (typeof instr_exp_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_exp_key_resp.rt', instr_exp_key_resp.rt);
        routineTimer.reset();
        }
    
    instr_exp_key_resp.stop();
    // the Routine "instr_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _end_key_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_key_resp.keys = undefined;
    end_key_resp.rt = undefined;
    _end_key_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_key_resp);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *end_key_resp* updates
    if (t >= 0.0 && end_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key_resp.tStart = t;  // (not accounting for frame time here)
      end_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key_resp.clearEvents(); });
    }

    if (end_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_key_resp_allKeys = _end_key_resp_allKeys.concat(theseKeys);
      if (_end_key_resp_allKeys.length > 0) {
        end_key_resp.keys = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].name;  // just the last key pressed
        end_key_resp.rt = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd() {
  return async function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_key_resp.keys', end_key_resp.keys);
    if (typeof end_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_key_resp.rt', end_key_resp.rt);
        routineTimer.reset();
        }
    
    end_key_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
