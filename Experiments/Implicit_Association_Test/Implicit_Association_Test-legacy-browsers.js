/********************************** 
 * Implicit_Association_Test Test *
 **********************************/


// store info about the experiment session:
let expName = 'Implicit_Association_Test';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
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
flowScheduler.add(IAT_InstructionRoutineBegin());
flowScheduler.add(IAT_InstructionRoutineEachFrame());
flowScheduler.add(IAT_InstructionRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'materials/materials.pptx', 'path': 'materials/materials.pptx'},
    {'name': 'materials/step2_error.jpg', 'path': 'materials/step2_error.jpg'},
    {'name': 'materials/step2_instr.jpg', 'path': 'materials/step2_instr.jpg'},
    {'name': 'materials/end3.jpg', 'path': 'materials/end3.jpg'},
    {'name': 'conditions/step3_practice.xlsx', 'path': 'conditions/step3_practice.xlsx'},
    {'name': 'conditions/step4.xlsx', 'path': 'conditions/step4.xlsx'},
    {'name': 'materials/step3_background.jpg', 'path': 'materials/step3_background.jpg'},
    {'name': 'materials/step4_background.jpg', 'path': 'materials/step4_background.jpg'},
    {'name': 'materials/step5_practice_instr.jpg', 'path': 'materials/step5_practice_instr.jpg'},
    {'name': 'materials/condition_feedback_background.jpg', 'path': 'materials/condition_feedback_background.jpg'},
    {'name': 'conditions/conditions2.xlsx', 'path': 'conditions/conditions2.xlsx'},
    {'name': 'materials/step1_error.jpg', 'path': 'materials/step1_error.jpg'},
    {'name': 'materials/step4_error.jpg', 'path': 'materials/step4_error.jpg'},
    {'name': 'materials/step3_practice_instr.jpg', 'path': 'materials/step3_practice_instr.jpg'},
    {'name': 'materials/instruction.jpg', 'path': 'materials/instruction.jpg'},
    {'name': 'materials/step2_background.jpg', 'path': 'materials/step2_background.jpg'},
    {'name': 'materials/step1_instr.jpg', 'path': 'materials/step1_instr.jpg'},
    {'name': 'conditions/step5_test.xlsx', 'path': 'conditions/step5_test.xlsx'},
    {'name': 'materials/end2.jpg', 'path': 'materials/end2.jpg'},
    {'name': 'conditions/step1.xlsx', 'path': 'conditions/step1.xlsx'},
    {'name': 'materials/step5_background.jpg', 'path': 'materials/step5_background.jpg'},
    {'name': 'conditions/step3_test.xlsx', 'path': 'conditions/step3_test.xlsx'},
    {'name': 'materials/step3_error.jpg', 'path': 'materials/step3_error.jpg'},
    {'name': 'conditions/step2.xlsx', 'path': 'conditions/step2.xlsx'},
    {'name': 'materials/step5_test_instr.jpg', 'path': 'materials/step5_test_instr.jpg'},
    {'name': 'conditions/conditions1.xlsx', 'path': 'conditions/conditions1.xlsx'},
    {'name': 'materials/step5_error.jpg', 'path': 'materials/step5_error.jpg'},
    {'name': 'materials/step1_background.jpg', 'path': 'materials/step1_background.jpg'},
    {'name': 'materials/step3_test_instr.jpg', 'path': 'materials/step3_test_instr.jpg'},
    {'name': 'materials/end1.jpg', 'path': 'materials/end1.jpg'},
    {'name': 'materials/step4_instr.jpg', 'path': 'materials/step4_instr.jpg'},
    {'name': 'conditions/step5_practice.xlsx', 'path': 'conditions/step5_practice.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


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


var IAT_InstructionClock;
var blocks_order;
var IAT_instr_image;
var IAT_instr_key_resp;
var Step_Instruction_2Clock;
var instr_image;
var instr_key_resp;
var BlankClock;
var blank_text;
var TrialClock;
var corr_record;
var rt_record;
var interval_time_list;
var trial_test_background_img;
var stimuli_text;
var response;
var Trial_FeedbackClock;
var error_feedback_img;
var error_feedback_resp;
var Condition_FeedbackClock;
var condition_feedback_background_img;
var feedback_text;
var condition_feedback_resp;
var EndClock;
var end3_image;
var end2_image;
var end1_image;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "IAT_Instruction"
  IAT_InstructionClock = new util.Clock();
  blocks_order = util.randint(1, 2);
  
  IAT_instr_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'IAT_instr_image', units : 'height', 
    image : 'materials/instruction.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.6, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  IAT_instr_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Step_Instruction_2"
  Step_Instruction_2Clock = new util.Clock();
  instr_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.6, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  instr_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
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
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  corr_record = [];
  rt_record = [];
  interval_time_list = [0.1, 0.4, 0.7];
  
  trial_test_background_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial_test_background_img', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.6, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  stimuli_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimuli_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Trial_Feedback"
  Trial_FeedbackClock = new util.Clock();
  error_feedback_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'error_feedback_img', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.6, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  error_feedback_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Condition_Feedback"
  Condition_FeedbackClock = new util.Clock();
  condition_feedback_background_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'condition_feedback_background_img', units : 'height', 
    image : 'materials/condition_feedback_background.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.6, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  condition_feedback_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  end3_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'end3_image', units : 'height', 
    image : 'materials/end3.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.6, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  end2_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'end2_image', units : 'height', 
    image : 'materials/end2.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.6, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  end1_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'end1_image', units : 'height', 
    image : 'materials/end1.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.6, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _IAT_instr_key_resp_allKeys;
var IAT_InstructionComponents;
function IAT_InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'IAT_Instruction'-------
    t = 0;
    IAT_InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    IAT_instr_key_resp.keys = undefined;
    IAT_instr_key_resp.rt = undefined;
    _IAT_instr_key_resp_allKeys = [];
    // keep track of which components have finished
    IAT_InstructionComponents = [];
    IAT_InstructionComponents.push(IAT_instr_image);
    IAT_InstructionComponents.push(IAT_instr_key_resp);
    
    IAT_InstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IAT_InstructionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'IAT_Instruction'-------
    // get current time
    t = IAT_InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *IAT_instr_image* updates
    if (t >= 0.0 && IAT_instr_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IAT_instr_image.tStart = t;  // (not accounting for frame time here)
      IAT_instr_image.frameNStart = frameN;  // exact frame index
      
      IAT_instr_image.setAutoDraw(true);
    }

    
    // *IAT_instr_key_resp* updates
    if (t >= 0.0 && IAT_instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IAT_instr_key_resp.tStart = t;  // (not accounting for frame time here)
      IAT_instr_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { IAT_instr_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { IAT_instr_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { IAT_instr_key_resp.clearEvents(); });
    }

    if (IAT_instr_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = IAT_instr_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _IAT_instr_key_resp_allKeys = _IAT_instr_key_resp_allKeys.concat(theseKeys);
      if (_IAT_instr_key_resp_allKeys.length > 0) {
        IAT_instr_key_resp.keys = _IAT_instr_key_resp_allKeys[_IAT_instr_key_resp_allKeys.length - 1].name;  // just the last key pressed
        IAT_instr_key_resp.rt = _IAT_instr_key_resp_allKeys[_IAT_instr_key_resp_allKeys.length - 1].rt;
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
    IAT_InstructionComponents.forEach( function(thisComponent) {
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


function IAT_InstructionRoutineEnd() {
  return async function () {
    //------Ending Routine 'IAT_Instruction'-------
    IAT_InstructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('IAT_instr_key_resp.keys', IAT_instr_key_resp.keys);
    if (typeof IAT_instr_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('IAT_instr_key_resp.rt', IAT_instr_key_resp.rt);
        routineTimer.reset();
        }
    
    IAT_instr_key_resp.stop();
    // the Routine "IAT_Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blocks;
var currentLoop;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("conditions/conditions" + blocks_order.toString()) + ".xlsx"),
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blocks.forEach(function() {
      const snapshot = blocks.getSnapshot();
    
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(Step_Instruction_2RoutineBegin(snapshot));
      blocksLoopScheduler.add(Step_Instruction_2RoutineEachFrame());
      blocksLoopScheduler.add(Step_Instruction_2RoutineEnd());
      blocksLoopScheduler.add(BlankRoutineBegin(snapshot));
      blocksLoopScheduler.add(BlankRoutineEachFrame());
      blocksLoopScheduler.add(BlankRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(Condition_FeedbackRoutineBegin(snapshot));
      blocksLoopScheduler.add(Condition_FeedbackRoutineEachFrame());
      blocksLoopScheduler.add(Condition_FeedbackRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
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
      trialList: step_order_filename,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(TrialRoutineBegin(snapshot));
      trialsLoopScheduler.add(TrialRoutineEachFrame());
      trialsLoopScheduler.add(TrialRoutineEnd());
      trialsLoopScheduler.add(Trial_FeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(Trial_FeedbackRoutineEachFrame());
      trialsLoopScheduler.add(Trial_FeedbackRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var _instr_key_resp_allKeys;
var Step_Instruction_2Components;
function Step_Instruction_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Step_Instruction_2'-------
    t = 0;
    Step_Instruction_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_image.setImage(step_instruction_filename);
    instr_key_resp.keys = undefined;
    instr_key_resp.rt = undefined;
    _instr_key_resp_allKeys = [];
    // keep track of which components have finished
    Step_Instruction_2Components = [];
    Step_Instruction_2Components.push(instr_image);
    Step_Instruction_2Components.push(instr_key_resp);
    
    Step_Instruction_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Step_Instruction_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Step_Instruction_2'-------
    // get current time
    t = Step_Instruction_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_image* updates
    if (t >= 0.0 && instr_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_image.tStart = t;  // (not accounting for frame time here)
      instr_image.frameNStart = frameN;  // exact frame index
      
      instr_image.setAutoDraw(true);
    }

    
    // *instr_key_resp* updates
    if (t >= 0.0 && instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp.tStart = t;  // (not accounting for frame time here)
      instr_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp.clearEvents(); });
    }

    if (instr_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_allKeys = _instr_key_resp_allKeys.concat(theseKeys);
      if (_instr_key_resp_allKeys.length > 0) {
        instr_key_resp.keys = _instr_key_resp_allKeys[_instr_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp.rt = _instr_key_resp_allKeys[_instr_key_resp_allKeys.length - 1].rt;
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
    Step_Instruction_2Components.forEach( function(thisComponent) {
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


function Step_Instruction_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Step_Instruction_2'-------
    Step_Instruction_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_key_resp.keys', instr_key_resp.keys);
    if (typeof instr_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp.rt', instr_key_resp.rt);
        routineTimer.reset();
        }
    
    instr_key_resp.stop();
    // the Routine "Step_Instruction_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var BlankComponents;
function BlankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Blank'-------
    t = 0;
    BlankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    BlankComponents = [];
    BlankComponents.push(blank_text);
    
    BlankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function BlankRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Blank'-------
    // get current time
    t = BlankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank_text* updates
    if (t >= 0.0 && blank_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_text.tStart = t;  // (not accounting for frame time here)
      blank_text.frameNStart = frameN;  // exact frame index
      
      blank_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    BlankComponents.forEach( function(thisComponent) {
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


function BlankRoutineEnd() {
  return async function () {
    //------Ending Routine 'Blank'-------
    BlankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var interval_time;
var _response_allKeys;
var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Trial'-------
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(interval_time_list);
    interval_time = interval_time_list[0];
    
    trial_test_background_img.setImage(step_background_filename);
    stimuli_text.setText(stimuli_words);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(trial_test_background_img);
    TrialComponents.push(stimuli_text);
    TrialComponents.push(response);
    
    TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function TrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Trial'-------
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_test_background_img* updates
    if (t >= 0.0 && trial_test_background_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_test_background_img.tStart = t;  // (not accounting for frame time here)
      trial_test_background_img.frameNStart = frameN;  // exact frame index
      
      trial_test_background_img.setAutoDraw(true);
    }

    
    // *stimuli_text* updates
    if (t >= interval_time && stimuli_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli_text.tStart = t;  // (not accounting for frame time here)
      stimuli_text.frameNStart = frameN;  // exact frame index
      
      stimuli_text.setAutoDraw(true);
    }

    
    // *response* updates
    if (t >= interval_time && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }

    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        // was this correct?
        if (response.keys == CorrAns) {
            response.corr = 1;
        } else {
            response.corr = 0;
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
    TrialComponents.forEach( function(thisComponent) {
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


function TrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'Trial'-------
    TrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    corr_record.push(response.corr);
    rt_record.push(response.rt);
    psychoJS.experiment.addData("response.interval_time", interval_time);
    
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
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
    // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _error_feedback_resp_allKeys;
var Trial_FeedbackComponents;
function Trial_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Trial_Feedback'-------
    t = 0;
    Trial_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    error_feedback_img.setImage(step_error_filename);
    error_feedback_resp.keys = undefined;
    error_feedback_resp.rt = undefined;
    _error_feedback_resp_allKeys = [];
    // keep track of which components have finished
    Trial_FeedbackComponents = [];
    Trial_FeedbackComponents.push(error_feedback_img);
    Trial_FeedbackComponents.push(error_feedback_resp);
    
    Trial_FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var n_keys;
var last_key;
function Trial_FeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Trial_Feedback'-------
    // get current time
    t = Trial_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *error_feedback_img* updates
    if (t >= 0.0 && error_feedback_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      error_feedback_img.tStart = t;  // (not accounting for frame time here)
      error_feedback_img.frameNStart = frameN;  // exact frame index
      
      error_feedback_img.setAutoDraw(true);
    }

    
    // *error_feedback_resp* updates
    if (t >= 0.0 && error_feedback_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      error_feedback_resp.tStart = t;  // (not accounting for frame time here)
      error_feedback_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { error_feedback_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { error_feedback_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { error_feedback_resp.clearEvents(); });
    }

    if (error_feedback_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = error_feedback_resp.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _error_feedback_resp_allKeys = _error_feedback_resp_allKeys.concat(theseKeys);
      if (_error_feedback_resp_allKeys.length > 0) {
        error_feedback_resp.keys = _error_feedback_resp_allKeys[_error_feedback_resp_allKeys.length - 1].name;  // just the last key pressed
        error_feedback_resp.rt = _error_feedback_resp_allKeys[_error_feedback_resp_allKeys.length - 1].rt;
        // was this correct?
        if (error_feedback_resp.keys == CorrAns) {
            error_feedback_resp.corr = 1;
        } else {
            error_feedback_resp.corr = 0;
        }
      }
    }
    
    if (((! need_feedback) || response.corr)) {
        continueRoutine = false;
    }
    if (error_feedback_resp.keys) {
        n_keys = error_feedback_resp.keys.length;
        last_key = error_feedback_resp.keys[(n_keys - 1)];
        if ((last_key === CorrAns)) {
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
    Trial_FeedbackComponents.forEach( function(thisComponent) {
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


function Trial_FeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'Trial_Feedback'-------
    Trial_FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (error_feedback_resp.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         error_feedback_resp.corr = 1;  // correct non-response
      } else {
         error_feedback_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('error_feedback_resp.keys', error_feedback_resp.keys);
    psychoJS.experiment.addData('error_feedback_resp.corr', error_feedback_resp.corr);
    if (typeof error_feedback_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('error_feedback_resp.rt', error_feedback_resp.rt);
        }
    
    error_feedback_resp.stop();
    // the Routine "Trial_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var average_corr;
var average_rt;
var corr_feedback_message;
var rt_corr_feedback_message;
var feedback_message;
var _condition_feedback_resp_allKeys;
var Condition_FeedbackComponents;
function Condition_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Condition_Feedback'-------
    t = 0;
    Condition_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    average_corr = ((util.sum(corr_record) / corr_record.length) * 100);
    average_rt = (util.sum(rt_record) / rt_record.length);
    corr_feedback_message = `这一轮你的正确率为：${round(average_corr, 2)}%`;
    rt_corr_feedback_message = `这一轮你的平均反应时间为：${round(average_rt, 2)} 秒`;
    feedback_message = `${corr_feedback_message}
    ${rt_corr_feedback_message}`
    ;
    corr_record = [];
    rt_record = [];
    
    feedback_text.setText(feedback_message);
    condition_feedback_resp.keys = undefined;
    condition_feedback_resp.rt = undefined;
    _condition_feedback_resp_allKeys = [];
    // keep track of which components have finished
    Condition_FeedbackComponents = [];
    Condition_FeedbackComponents.push(condition_feedback_background_img);
    Condition_FeedbackComponents.push(feedback_text);
    Condition_FeedbackComponents.push(condition_feedback_resp);
    
    Condition_FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Condition_FeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Condition_Feedback'-------
    // get current time
    t = Condition_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *condition_feedback_background_img* updates
    if (t >= 0.0 && condition_feedback_background_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      condition_feedback_background_img.tStart = t;  // (not accounting for frame time here)
      condition_feedback_background_img.frameNStart = frameN;  // exact frame index
      
      condition_feedback_background_img.setAutoDraw(true);
    }

    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    
    // *condition_feedback_resp* updates
    if (t >= 0.0 && condition_feedback_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      condition_feedback_resp.tStart = t;  // (not accounting for frame time here)
      condition_feedback_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { condition_feedback_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { condition_feedback_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { condition_feedback_resp.clearEvents(); });
    }

    if (condition_feedback_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = condition_feedback_resp.getKeys({keyList: ['space'], waitRelease: false});
      _condition_feedback_resp_allKeys = _condition_feedback_resp_allKeys.concat(theseKeys);
      if (_condition_feedback_resp_allKeys.length > 0) {
        condition_feedback_resp.keys = _condition_feedback_resp_allKeys[_condition_feedback_resp_allKeys.length - 1].name;  // just the last key pressed
        condition_feedback_resp.rt = _condition_feedback_resp_allKeys[_condition_feedback_resp_allKeys.length - 1].rt;
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
    Condition_FeedbackComponents.forEach( function(thisComponent) {
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


function Condition_FeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'Condition_Feedback'-------
    Condition_FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('condition_feedback_resp.keys', condition_feedback_resp.keys);
    if (typeof condition_feedback_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('condition_feedback_resp.rt', condition_feedback_resp.rt);
        routineTimer.reset();
        }
    
    condition_feedback_resp.stop();
    // the Routine "Condition_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(end3_image);
    EndComponents.push(end2_image);
    EndComponents.push(end1_image);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End'-------
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end3_image* updates
    if (t >= 0.0 && end3_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end3_image.tStart = t;  // (not accounting for frame time here)
      end3_image.frameNStart = frameN;  // exact frame index
      
      end3_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end3_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end3_image.setAutoDraw(false);
    }
    
    // *end2_image* updates
    if (t >= 1 && end2_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end2_image.tStart = t;  // (not accounting for frame time here)
      end2_image.frameNStart = frameN;  // exact frame index
      
      end2_image.setAutoDraw(true);
    }

    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end2_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end2_image.setAutoDraw(false);
    }
    
    // *end1_image* updates
    if (t >= 2 && end1_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end1_image.tStart = t;  // (not accounting for frame time here)
      end1_image.frameNStart = frameN;  // exact frame index
      
      end1_image.setAutoDraw(true);
    }

    frameRemains = 2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end1_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end1_image.setAutoDraw(false);
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
    EndComponents.forEach( function(thisComponent) {
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


function EndRoutineEnd() {
  return async function () {
    //------Ending Routine 'End'-------
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
