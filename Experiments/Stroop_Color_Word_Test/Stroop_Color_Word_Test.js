/******************************* 
 * Stroop_Color_Word_Test Test *
 *******************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Stroop_Color_Word_Test';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
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
const practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practiceLoopBegin(practiceLoopScheduler));
flowScheduler.add(practiceLoopScheduler);
flowScheduler.add(practiceLoopEnd);
flowScheduler.add(instr_expRoutineBegin());
flowScheduler.add(instr_expRoutineEachFrame());
flowScheduler.add(instr_expRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Instr/instr_practice.jpeg', 'path': 'Instr/instr_practice.jpeg'},
    {'name': 'Instr/instr_exp.jpeg', 'path': 'Instr/instr_exp.jpeg'},
    {'name': 'condition.xlsx', 'path': 'condition.xlsx'}
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
var instr_practice_key_resp;
var instr_practice_image;
var trialClock;
var stroop_word;
var exp_resp;
var feedbackClock;
var feedback_word;
var count_trial;
var count_corr;
var feedback_text;
var instr_expClock;
var instr_exp_key_resp;
var instr_exp_image;
var thanksClock;
var thanks_word;
var thanks_key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr_practice"
  instr_practiceClock = new util.Clock();
  instr_practice_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_practice_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_practice_image', units : undefined, 
    image : 'Instr/instr_practice.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.778, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  stroop_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'stroop_word',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  exp_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_word = "";
  count_trial = 0;
  count_corr = 0;
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instr_exp"
  instr_expClock = new util.Clock();
  instr_exp_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_exp_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_exp_image', units : undefined, 
    image : 'Instr/instr_exp.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.778, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_word',
    text: '此次实验到此结束。\n感谢您的参与。\n祝好\n(按击空格键退出实验)\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  thanks_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    instr_practiceComponents.push(instr_practice_key_resp);
    instr_practiceComponents.push(instr_practice_image);
    
    for (const thisComponent of instr_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    
    // *instr_practice_image* updates
    if (t >= 0.0 && instr_practice_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_practice_image.tStart = t;  // (not accounting for frame time here)
      instr_practice_image.frameNStart = frameN;  // exact frame index
      
      instr_practice_image.setAutoDraw(true);
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
    for (const thisComponent of instr_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of instr_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var practice;
var currentLoop;
function practiceLoopBegin(practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition.xlsx',
      seed: undefined, name: 'practice'
    });
    psychoJS.experiment.addLoop(practice); // add the loop to the experiment
    currentLoop = practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice of practice) {
      const snapshot = practice.getSnapshot();
      practiceLoopScheduler.add(importConditions(snapshot));
      practiceLoopScheduler.add(trialRoutineBegin(snapshot));
      practiceLoopScheduler.add(trialRoutineEachFrame());
      practiceLoopScheduler.add(trialRoutineEnd());
      practiceLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practiceLoopScheduler.add(feedbackRoutineEachFrame());
      practiceLoopScheduler.add(feedbackRoutineEnd());
      practiceLoopScheduler.add(endLoopIteration(practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceLoopEnd() {
  psychoJS.experiment.removeLoop(practice);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _exp_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stroop_word.setColor(new util.Color(word_color));
    stroop_word.setText(text);
    exp_resp.keys = undefined;
    exp_resp.rt = undefined;
    _exp_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(stroop_word);
    trialComponents.push(exp_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *stroop_word* updates
    if (t >= 0.5 && stroop_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stroop_word.tStart = t;  // (not accounting for frame time here)
      stroop_word.frameNStart = frameN;  // exact frame index
      
      stroop_word.setAutoDraw(true);
    }

    
    // *exp_resp* updates
    if (t >= 0.5 && exp_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_resp.tStart = t;  // (not accounting for frame time here)
      exp_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exp_resp.clearEvents(); });
    }

    if (exp_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp_resp.getKeys({keyList: ['f', 'g', 'h', 'j'], waitRelease: false});
      _exp_resp_allKeys = _exp_resp_allKeys.concat(theseKeys);
      if (_exp_resp_allKeys.length > 0) {
        exp_resp.keys = _exp_resp_allKeys[_exp_resp_allKeys.length - 1].name;  // just the last key pressed
        exp_resp.rt = _exp_resp_allKeys[_exp_resp_allKeys.length - 1].rt;
        // was this correct?
        if (exp_resp.keys == corr_ans) {
            exp_resp.corr = 1;
        } else {
            exp_resp.corr = 0;
        }
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
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (exp_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         exp_resp.corr = 1;  // correct non-response
      } else {
         exp_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('exp_resp.keys', exp_resp.keys);
    psychoJS.experiment.addData('exp_resp.corr', exp_resp.corr);
    if (typeof exp_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exp_resp.rt', exp_resp.rt);
        routineTimer.reset();
        }
    
    exp_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    if (exp_resp.corr) {
        count_corr += 1;
        count_trial += 1;
        if ((exp_resp.rt < 1.5)) {
            feedback_word = `正确！你的反应时为：${(Number.parseInt((exp_resp.rt * 1000)) / 1000)}s。正确数：${count_corr}`;
        } else {
            feedback_word = `正确！但反应太慢！反应时为：${(Number.parseInt((exp_resp.rt * 1000)) / 1000)}s。正确数：${count_corr}`;
        }
    } else {
        count_trial += 1;
        feedback_word = `啊哦，错误！正确数：${count_corr}。
    请注意，如果您正确数低于18，需重复练习。`
    ;
    }
    if ((count_trial === 24)) {
        if ((count_corr >= 18)) {
            practice.finished = true;
        } else {
            count_trial = 0;
            count_corr = 0;
            feedback_word = "\u56e0\u4e3a\u60a8\u7684\u6b63\u786e\u6570\u8fc7\u4f4e\uff0c\u5c06\u518d\u6b21\u8fdb\u5165\u7ec3\u4e60\u9636\u6bb5\u3002";
        }
    }
    
    feedback_text.setText(feedback_word);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
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
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    instr_expComponents.push(instr_exp_key_resp);
    instr_expComponents.push(instr_exp_image);
    
    for (const thisComponent of instr_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    
    // *instr_exp_image* updates
    if (t >= 0.0 && instr_exp_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_exp_image.tStart = t;  // (not accounting for frame time here)
      instr_exp_image.frameNStart = frameN;  // exact frame index
      
      instr_exp_image.setAutoDraw(true);
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
    for (const thisComponent of instr_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of instr_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var _thanks_key_resp_allKeys;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    thanks_key_resp.keys = undefined;
    thanks_key_resp.rt = undefined;
    _thanks_key_resp_allKeys = [];
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_word);
    thanksComponents.push(thanks_key_resp);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'thanks'-------
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_word* updates
    if (t >= 0.0 && thanks_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_word.tStart = t;  // (not accounting for frame time here)
      thanks_word.frameNStart = frameN;  // exact frame index
      
      thanks_word.setAutoDraw(true);
    }

    
    // *thanks_key_resp* updates
    if (t >= 0.0 && thanks_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_key_resp.tStart = t;  // (not accounting for frame time here)
      thanks_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { thanks_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { thanks_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { thanks_key_resp.clearEvents(); });
    }

    if (thanks_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = thanks_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _thanks_key_resp_allKeys = _thanks_key_resp_allKeys.concat(theseKeys);
      if (_thanks_key_resp_allKeys.length > 0) {
        thanks_key_resp.keys = _thanks_key_resp_allKeys[_thanks_key_resp_allKeys.length - 1].name;  // just the last key pressed
        thanks_key_resp.rt = _thanks_key_resp_allKeys[_thanks_key_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd() {
  return async function () {
    //------Ending Routine 'thanks'-------
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks_key_resp.keys', thanks_key_resp.keys);
    if (typeof thanks_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('thanks_key_resp.rt', thanks_key_resp.rt);
        routineTimer.reset();
        }
    
    thanks_key_resp.stop();
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
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
