#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on 九月 14, 2023, at 19:06
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'Stroop_Color_Word_Test'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='E:\\Projects\\Naodao\\2023_09_03_Data_Quality\\Data_Quality\\Experiments\\Stroop_Color_Word_Test\\Stroop_Color_Word_Test_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[960, 540], fullscr=False, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instr_practice"
instr_practiceClock = core.Clock()
instr_practice_key_resp = keyboard.Keyboard()
instr_practice_image = visual.ImageStim(
    win=win,
    name='instr_practice_image', 
    image='Instr/instr_practice.jpeg', mask=None,
    ori=0, pos=(0, 0), size=(1.778, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)

# Initialize components for Routine "trial"
trialClock = core.Clock()
stroop_word = visual.TextStim(win=win, name='stroop_word',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
exp_resp = keyboard.Keyboard()

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
#feedback word variable just needs some value at start
#feed_word变量需要在实验开始时被定义，并且赋予值
feedback_word = ""
count_trial = 0
count_corr = 0

feedback_text = visual.TextStim(win=win, name='feedback_text',
    text='',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "instr_exp"
instr_expClock = core.Clock()
instr_exp_key_resp = keyboard.Keyboard()
instr_exp_image = visual.ImageStim(
    win=win,
    name='instr_exp_image', 
    image='Instr/instr_exp.jpeg', mask=None,
    ori=0, pos=(0, 0), size=(1.778, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)

# Initialize components for Routine "trial"
trialClock = core.Clock()
stroop_word = visual.TextStim(win=win, name='stroop_word',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
exp_resp = keyboard.Keyboard()

# Initialize components for Routine "thanks"
thanksClock = core.Clock()
thanks_word = visual.TextStim(win=win, name='thanks_word',
    text='此次实验到此结束。\n感谢您的参与。\n祝好\n(按击空格键退出实验)\n\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
thanks_key_resp = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instr_practice"-------
continueRoutine = True
# update component parameters for each repeat
instr_practice_key_resp.keys = []
instr_practice_key_resp.rt = []
_instr_practice_key_resp_allKeys = []
# keep track of which components have finished
instr_practiceComponents = [instr_practice_key_resp, instr_practice_image]
for thisComponent in instr_practiceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_practice"-------
while continueRoutine:
    # get current time
    t = instr_practiceClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_practiceClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_practice_key_resp* updates
    waitOnFlip = False
    if instr_practice_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_practice_key_resp.frameNStart = frameN  # exact frame index
        instr_practice_key_resp.tStart = t  # local t and not account for scr refresh
        instr_practice_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_practice_key_resp, 'tStartRefresh')  # time at next scr refresh
        instr_practice_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_practice_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_practice_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_practice_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = instr_practice_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _instr_practice_key_resp_allKeys.extend(theseKeys)
        if len(_instr_practice_key_resp_allKeys):
            instr_practice_key_resp.keys = _instr_practice_key_resp_allKeys[-1].name  # just the last key pressed
            instr_practice_key_resp.rt = _instr_practice_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *instr_practice_image* updates
    if instr_practice_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_practice_image.frameNStart = frameN  # exact frame index
        instr_practice_image.tStart = t  # local t and not account for scr refresh
        instr_practice_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_practice_image, 'tStartRefresh')  # time at next scr refresh
        instr_practice_image.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_practiceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_practice"-------
for thisComponent in instr_practiceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if instr_practice_key_resp.keys in ['', [], None]:  # No response was made
    instr_practice_key_resp.keys = None
thisExp.addData('instr_practice_key_resp.keys',instr_practice_key_resp.keys)
if instr_practice_key_resp.keys != None:  # we had a response
    thisExp.addData('instr_practice_key_resp.rt', instr_practice_key_resp.rt)
thisExp.addData('instr_practice_key_resp.started', instr_practice_key_resp.tStartRefresh)
thisExp.addData('instr_practice_key_resp.stopped', instr_practice_key_resp.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('instr_practice_image.started', instr_practice_image.tStartRefresh)
thisExp.addData('instr_practice_image.stopped', instr_practice_image.tStopRefresh)
# the Routine "instr_practice" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice = data.TrialHandler(nReps=999, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('condition.xlsx'),
    seed=None, name='practice')
thisExp.addLoop(practice)  # add the loop to the experiment
thisPractice = practice.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
if thisPractice != None:
    for paramName in thisPractice:
        exec('{} = thisPractice[paramName]'.format(paramName))

for thisPractice in practice:
    currentLoop = practice
    # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
    if thisPractice != None:
        for paramName in thisPractice:
            exec('{} = thisPractice[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    stroop_word.setColor(word_color, colorSpace='rgb')
    stroop_word.setText(text)
    exp_resp.keys = []
    exp_resp.rt = []
    _exp_resp_allKeys = []
    # keep track of which components have finished
    trialComponents = [stroop_word, exp_resp]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stroop_word* updates
        if stroop_word.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            stroop_word.frameNStart = frameN  # exact frame index
            stroop_word.tStart = t  # local t and not account for scr refresh
            stroop_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stroop_word, 'tStartRefresh')  # time at next scr refresh
            stroop_word.setAutoDraw(True)
        
        # *exp_resp* updates
        waitOnFlip = False
        if exp_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            exp_resp.frameNStart = frameN  # exact frame index
            exp_resp.tStart = t  # local t and not account for scr refresh
            exp_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_resp, 'tStartRefresh')  # time at next scr refresh
            exp_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(exp_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(exp_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if exp_resp.status == STARTED and not waitOnFlip:
            theseKeys = exp_resp.getKeys(keyList=['f', 'g', 'h', 'j'], waitRelease=False)
            _exp_resp_allKeys.extend(theseKeys)
            if len(_exp_resp_allKeys):
                exp_resp.keys = _exp_resp_allKeys[-1].name  # just the last key pressed
                exp_resp.rt = _exp_resp_allKeys[-1].rt
                # was this correct?
                if (exp_resp.keys == str(corr_ans)) or (exp_resp.keys == corr_ans):
                    exp_resp.corr = 1
                else:
                    exp_resp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practice.addData('stroop_word.started', stroop_word.tStartRefresh)
    practice.addData('stroop_word.stopped', stroop_word.tStopRefresh)
    # check responses
    if exp_resp.keys in ['', [], None]:  # No response was made
        exp_resp.keys = None
        # was no response the correct answer?!
        if str(corr_ans).lower() == 'none':
           exp_resp.corr = 1;  # correct non-response
        else:
           exp_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for practice (TrialHandler)
    practice.addData('exp_resp.keys',exp_resp.keys)
    practice.addData('exp_resp.corr', exp_resp.corr)
    if exp_resp.keys != None:  # we had a response
        practice.addData('exp_resp.rt', exp_resp.rt)
    practice.addData('exp_resp.started', exp_resp.tStartRefresh)
    practice.addData('exp_resp.stopped', exp_resp.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    
    
    if exp_resp.corr:
      # exp_resp在上个routine（trial）结束时被储存
      # exp_resp.corr用来判断trial中被试给出的反应是否正确
      # 存储正确率的变量+1
      count_corr += 1
      count_trial += 1
      # 如果被试反应正确并且反应时不超过2s，反馈出正确的信息
      if exp_resp.rt < 1.5:
      # 此处需手动在JS中更改string格式
        feedback_word="正确！你的反应时为：%.3f"%(exp_resp.rt)+ "s。正确数：%d"%(count_corr)
      else:
      # 如果被试反应时超过1.5s,反馈出反应慢的信息
        feedback_word="正确！但反应太慢！反应时为：%.3f"%(exp_resp.rt)+ "s。正确数：%d"%(count_corr)
    else:
      count_trial += 1
      feedback_word="啊哦，错误！正确数：%d"%(count_corr)+ "。\n请注意，如果您正确数低于18，需重复练习。"
      # 如果被试反应不正确，反馈出错误的信息
      
    if count_trial == 24:
        if count_corr >= 18:
            #此处需手动在JS中将practice改为trials
            practice.finished = True
        else:
            count_trial = 0
            count_corr = 0
            feedback_word = "因为您的正确数过低，将再次进入练习阶段。"
            
    feedback_text.setText(feedback_word)
    # keep track of which components have finished
    feedbackComponents = [feedback_text]
    for thisComponent in feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedback_text* updates
        if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_text.frameNStart = frameN  # exact frame index
            feedback_text.tStart = t  # local t and not account for scr refresh
            feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
            feedback_text.setAutoDraw(True)
        if feedback_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > feedback_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                feedback_text.tStop = t  # not accounting for scr refresh
                feedback_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(feedback_text, 'tStopRefresh')  # time at next scr refresh
                feedback_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback"-------
    for thisComponent in feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practice.addData('feedback_text.started', feedback_text.tStartRefresh)
    practice.addData('feedback_text.stopped', feedback_text.tStopRefresh)
    thisExp.nextEntry()
    
# completed 999 repeats of 'practice'


# ------Prepare to start Routine "instr_exp"-------
continueRoutine = True
# update component parameters for each repeat
instr_exp_key_resp.keys = []
instr_exp_key_resp.rt = []
_instr_exp_key_resp_allKeys = []
# keep track of which components have finished
instr_expComponents = [instr_exp_key_resp, instr_exp_image]
for thisComponent in instr_expComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_expClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_exp"-------
while continueRoutine:
    # get current time
    t = instr_expClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_expClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_exp_key_resp* updates
    waitOnFlip = False
    if instr_exp_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_exp_key_resp.frameNStart = frameN  # exact frame index
        instr_exp_key_resp.tStart = t  # local t and not account for scr refresh
        instr_exp_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_exp_key_resp, 'tStartRefresh')  # time at next scr refresh
        instr_exp_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_exp_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_exp_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_exp_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = instr_exp_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _instr_exp_key_resp_allKeys.extend(theseKeys)
        if len(_instr_exp_key_resp_allKeys):
            instr_exp_key_resp.keys = _instr_exp_key_resp_allKeys[-1].name  # just the last key pressed
            instr_exp_key_resp.rt = _instr_exp_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *instr_exp_image* updates
    if instr_exp_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_exp_image.frameNStart = frameN  # exact frame index
        instr_exp_image.tStart = t  # local t and not account for scr refresh
        instr_exp_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_exp_image, 'tStartRefresh')  # time at next scr refresh
        instr_exp_image.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_expComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_exp"-------
for thisComponent in instr_expComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if instr_exp_key_resp.keys in ['', [], None]:  # No response was made
    instr_exp_key_resp.keys = None
thisExp.addData('instr_exp_key_resp.keys',instr_exp_key_resp.keys)
if instr_exp_key_resp.keys != None:  # we had a response
    thisExp.addData('instr_exp_key_resp.rt', instr_exp_key_resp.rt)
thisExp.addData('instr_exp_key_resp.started', instr_exp_key_resp.tStartRefresh)
thisExp.addData('instr_exp_key_resp.stopped', instr_exp_key_resp.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('instr_exp_image.started', instr_exp_image.tStartRefresh)
thisExp.addData('instr_exp_image.stopped', instr_exp_image.tStopRefresh)
# the Routine "instr_exp" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=5, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('condition.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    stroop_word.setColor(word_color, colorSpace='rgb')
    stroop_word.setText(text)
    exp_resp.keys = []
    exp_resp.rt = []
    _exp_resp_allKeys = []
    # keep track of which components have finished
    trialComponents = [stroop_word, exp_resp]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stroop_word* updates
        if stroop_word.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            stroop_word.frameNStart = frameN  # exact frame index
            stroop_word.tStart = t  # local t and not account for scr refresh
            stroop_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stroop_word, 'tStartRefresh')  # time at next scr refresh
            stroop_word.setAutoDraw(True)
        
        # *exp_resp* updates
        waitOnFlip = False
        if exp_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            exp_resp.frameNStart = frameN  # exact frame index
            exp_resp.tStart = t  # local t and not account for scr refresh
            exp_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_resp, 'tStartRefresh')  # time at next scr refresh
            exp_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(exp_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(exp_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if exp_resp.status == STARTED and not waitOnFlip:
            theseKeys = exp_resp.getKeys(keyList=['f', 'g', 'h', 'j'], waitRelease=False)
            _exp_resp_allKeys.extend(theseKeys)
            if len(_exp_resp_allKeys):
                exp_resp.keys = _exp_resp_allKeys[-1].name  # just the last key pressed
                exp_resp.rt = _exp_resp_allKeys[-1].rt
                # was this correct?
                if (exp_resp.keys == str(corr_ans)) or (exp_resp.keys == corr_ans):
                    exp_resp.corr = 1
                else:
                    exp_resp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('stroop_word.started', stroop_word.tStartRefresh)
    trials.addData('stroop_word.stopped', stroop_word.tStopRefresh)
    # check responses
    if exp_resp.keys in ['', [], None]:  # No response was made
        exp_resp.keys = None
        # was no response the correct answer?!
        if str(corr_ans).lower() == 'none':
           exp_resp.corr = 1;  # correct non-response
        else:
           exp_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('exp_resp.keys',exp_resp.keys)
    trials.addData('exp_resp.corr', exp_resp.corr)
    if exp_resp.keys != None:  # we had a response
        trials.addData('exp_resp.rt', exp_resp.rt)
    trials.addData('exp_resp.started', exp_resp.tStartRefresh)
    trials.addData('exp_resp.stopped', exp_resp.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 5 repeats of 'trials'


# ------Prepare to start Routine "thanks"-------
continueRoutine = True
# update component parameters for each repeat
thanks_key_resp.keys = []
thanks_key_resp.rt = []
_thanks_key_resp_allKeys = []
# keep track of which components have finished
thanksComponents = [thanks_word, thanks_key_resp]
for thisComponent in thanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
thanksClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "thanks"-------
while continueRoutine:
    # get current time
    t = thanksClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=thanksClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thanks_word* updates
    if thanks_word.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thanks_word.frameNStart = frameN  # exact frame index
        thanks_word.tStart = t  # local t and not account for scr refresh
        thanks_word.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thanks_word, 'tStartRefresh')  # time at next scr refresh
        thanks_word.setAutoDraw(True)
    
    # *thanks_key_resp* updates
    waitOnFlip = False
    if thanks_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thanks_key_resp.frameNStart = frameN  # exact frame index
        thanks_key_resp.tStart = t  # local t and not account for scr refresh
        thanks_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thanks_key_resp, 'tStartRefresh')  # time at next scr refresh
        thanks_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(thanks_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(thanks_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if thanks_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = thanks_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _thanks_key_resp_allKeys.extend(theseKeys)
        if len(_thanks_key_resp_allKeys):
            thanks_key_resp.keys = _thanks_key_resp_allKeys[-1].name  # just the last key pressed
            thanks_key_resp.rt = _thanks_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "thanks"-------
for thisComponent in thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('thanks_word.started', thanks_word.tStartRefresh)
thisExp.addData('thanks_word.stopped', thanks_word.tStopRefresh)
# check responses
if thanks_key_resp.keys in ['', [], None]:  # No response was made
    thanks_key_resp.keys = None
thisExp.addData('thanks_key_resp.keys',thanks_key_resp.keys)
if thanks_key_resp.keys != None:  # we had a response
    thisExp.addData('thanks_key_resp.rt', thanks_key_resp.rt)
thisExp.addData('thanks_key_resp.started', thanks_key_resp.tStartRefresh)
thisExp.addData('thanks_key_resp.stopped', thanks_key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "thanks" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
