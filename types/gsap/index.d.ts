export class Ease {
  constructor(func?: (...args: any[]) => void, extraParams?: any[], type?: number, power?: number);

  /** Translates the tween's progress ratio into the corresponding ease ratio. */
  getRatio(p: number): number;
}

interface EaseLookup {
  find(name: string): Ease;
}

export class Back extends Ease {
  static easeIn: Back;
  static easeInOut: Back;
  static easeOut: Back;
  config(overshoot: number): Elastic;
}
export class Bounce extends Ease {
  static easeIn: Bounce;
  static easeInOut: Bounce;
  static easeOut: Bounce;
}
export class Circ extends Ease {
  static easeIn: Circ;
  static easeInOut: Circ;
  static easeOut: Circ;
}
export class Cubic extends Ease {
  static easeIn: Cubic;
  static easeInOut: Cubic;
  static easeOut: Cubic;
}

export class Elastic extends Ease {
  static easeIn: Elastic;
  static easeInOut: Elastic;
  static easeOut: Elastic;
  config(amplitude: number, period: number): Elastic;
}

export class Expo extends Ease {
  static easeIn: Expo;
  static easeInOut: Expo;
  static easeOut: Expo;
}

export class Linear extends Ease {
  static ease: Linear;
  static easeIn: Linear;
  static easeInOut: Linear;
  static easeNone: Linear;
  static easeOut: Linear;
}

export class Quad extends Ease {
  static easeIn: Quad;
  static easeInOut: Quad;
  static easeOut: Quad;
}

export class Quart extends Ease {
  static easeIn: Quart;
  static easeInOut: Quart;
  static easeOut: Quart;
}

export class Quint extends Ease {
  static easeIn: Quint;
  static easeInOut: Quint;
  static easeOut: Quint;
}

export class Sine extends Ease {
  static easeIn: Sine;
  static easeInOut: Sine;
  static easeOut: Sine;
}

export class SlowMo extends Ease {
  static ease: SlowMo;
  config(linearRatio: number, power: number, yoyoMode: boolean): SlowMo;
}

export class SteppedEase extends Ease {
  constructor(staps: number);
  config(steps: number): SteppedEase;
}

interface RoughEaseConfig {
  clamp?: boolean;
  points?: number;
  randomize?: boolean;
  strength?: number;
  taper?: "in" | "out" | "both" | "none";
  template?: Ease;
}

export class RoughEase extends Ease {
  static ease: RoughEase;
  constructor(vars: RoughEaseConfig);
  config(steps?: number): RoughEase;
}

export const Power0: typeof Linear;
export const Power1: typeof Quad;
export const Power2: typeof Cubic;
export const Power3: typeof Quart;
export const Power4: typeof Quint;
export const Strong: typeof Quint;

export type TweenConfig =  {
  /** Any tweenable property */
  [p: string]: any;

  /**
   * Amount of delay in seconds (or frames for frames-based tweens) before the animation should begin.
   */
  delay?: number;

  /** Ease (or () => void or String) - You can choose from various eases to control the rate of change during the animation, giving it a specific "feel". */
  ease?: Ease;

  yoyo?: boolean;

  /** If true, the tween will pause itself immediately upon creation. */
  paused?: boolean;

  /**
   * Controls how (and if) other tweens of the same target are overwritten. There are several modes to choose from, but "auto" is the default (although you can change the default mode using
   * theTweenLite.defaultOverwrite property)
   */
  overwrite?: string | number;

  /**  A () => void that should be called when the animation has completed. */
  onComplete?: (...args: any[]) => void;

  /** An Array of parameters to pass the onComplete () => void */
  onCompleteParams?: any[];

  /** Defines the scope of the onComplete () => void (what "this" refers to inside that () => void). */
  onCompleteScope?: {};

  /**
   * Normally when you create a tween, it begins rendering on the very next frame (update cycle) unless you specify a delay. However, if you prefer to force the tween to render
   * immediately when it is created, setimmediateRender to true. Or to prevent a from() from rendering immediately, set immediateRender to false. By default, from() tweens set
   * immediateRender to true.
   */
  immediateRender?: boolean;

  /** A () => void that should be called when the tween has reached its beginning again from the reverse direction. */
  onReverseComplete?: (...args: any[]) => void;

  /** An Array of parameters to pass the onReverseComplete () => void. */
  onReverseCompleteParams?: any[];

  /** Defines the scope of the onReverseComplete () => void (what "this" refers to inside that () => void). */
  onReverseCompleteScope?: {};

  /** A () => void that should be called when the tween begins (when its time changes from 0 to some other value which can happen more than once if the tween is restarted multiple times). */
  onStart?: (...args: any[]) => void;

  /** An Array of parameters to pass the onStart () => void. */
  onStartParams?: any[];

  /** Defines the scope of the onStart () => void (what "this" refers to inside that () => void). */
  onStartScope?: {};

  /** A () => void that should be called every time the animation updates (on every frame while the animation is active). */
  onUpdate?: (...args: any[]) => void;

  /** An Array of parameters to pass the onUpdate () => void. */
  onUpdateParams?: any[];

  /** Defines the scope of the onUpdate () => void (what "this" refers to inside that () => void). */
  onUpdateScope?: {};

  /**
   * If useFrames is true, the tweens's timing will be based on frames instead of seconds because it is intially added to the root frames-based timeline. This causes both its duration and
   * delay to be based on frames. An animations's timing mode is always determined by its parent timeline.
   */
  useFrames?: boolean;

  /**
   * When a tween renders for the very first time and reads its starting values, GSAP will automatically "lazy render" that particular tick by default, meaning it will try to delay the
   * rendering (writing of values) until the very end of the "tick" cycle which can improve performance because it avoids the read/write/read/write layout thrashing that some browsers do.
   *
   * If you would like to disable lazy rendering for a particular tween, you can set lazy:false. Or, since zero-duration tweens do not lazy-render by default, you can specifically give it
   * permission to lazy-render by setting lazy:true like TweenLite.set(element, {opacity:0, lazy:true});. In most cases, you won't need to set lazy.
   */
  lazy?: boolean;

  /** A () => void that should be called when the tween gets overwritten by another tween. */
  onOverwrite?: (...args: any[]) => void;

  /** If true atuomatically populates the css property for tween on DOM elements */
  autoCSS?: boolean;

  /** The scope to be used for all of the callbacks (onStart, onUpdate, onComplete, etc.). The scope is what "this" refers to inside any of the callbacks. */
  callbackScope?: {};

  startAt?: {};

  repeat?: number;

  repeatDelay?: number;

  onRepeat?: (...args: any[]) => void;

  onRepeatScope?: {};
}

export type Timeline = SimpleTimeline | TimelineLite | TimelineMax;

export class SimpleTimeline extends Animation {
  /**
   * SimpleTimeline is the base class for TimelineLite and TimelineMax, providing the most basic timeline () => voidality and it is used for the root timelines in TweenLite but is only
   * intended for internal use in the GreenSock tweening platform. It is meant to be very fast and lightweight.
   */
  constructor(vars?: any);

  /** If true, child tweens/timelines will be removed as soon as they complete. */
  autoRemoveChildren: boolean;

  /** Controls whether or not child tweens/timelines are repositioned automatically (changing their startTime) in order to maintain smooth playback when properties are changed on-the-fly. */
  smoothChildTiming: boolean;

  /** Adds a TweenLite, TweenMax, TimelineLite, or TimelineMax instance to the timeline at a specific time. */
  add(child: any, position?: any, align?: string, stagger?: number): SimpleTimeline;

  /** renders */
  render(time: number, suppressEvents?: boolean, force?: boolean): SimpleTimeline;
}

export class TimelineLite extends SimpleTimeline {
  constructor(vars?: {});

  /** Adds a tween, timeline, callback, or label (or an array of them) to the timeline. */
  add(value: any, position?: any, align?: string, stagger?: number): TimelineLite;

  /** Adds a label to the timeline, making it easy to mark important positions/times. */
  addLabel(label: string, position: any): TimelineLite;

  /** Inserts a special callback that pauses playback of the timeline at a particular time or label. */
  addPause(position?: any, callback?: (...args: any[]) => void, params?: any[], scope?: any): TimelineLite;

  /**
   * Adds a callback to the end of the timeline (or elsewhere using the "position" parameter) - this is a convenience method that accomplishes exactly the same thing as
   * add( TweenLite.delayedCall(...) ) but with less code.
   */
  call(callback: (...args: any[]) => void, params?: any[], scope?: any, position?: any): TimelineLite;

  /** Empties the timeline of all tweens, timelines, and callbacks (and optionally labels too). */
  clear(labels?: boolean): TimelineLite;

  /** Returns the time at which the animation will finish according to the parent timeline's local time. */
  endTime(includeRepeats?: boolean): number;

  /**
   * Seamlessly transfers all tweens, timelines, and [optionally] delayed calls from the root timeline into a new TimelineLite so that you can perform advanced tasks on a seemingly global
   * basis without affecting tweens/timelines that you create after the export.
   */
  static exportRoot(vars?: {}, omitDelayedCalls?: boolean): TimelineLite;

  /**
   * Adds a TweenLite.from() tween to the end of the timeline (or elsewhere using the "position" parameter) - this is a convenience method that accomplishes exactly the same thing as
   * add( TweenLite.from(...) ) but with less code.
   */
  from(target: {}, duration: number, vars: {}, position?: any): TimelineLite;

  /** Adds a TweenLite.fromTo() tween to the end of the timeline - this is a convenience method that accomplishes exactly the same thing as add( TweenLite.fromTo(...) ) but with less code. */
  fromTo(target: {}, duration: number, fromVars: {}, toVars: {}, position?: any): TimelineLite;

  /** Returns an array containing all the tweens and/or timelines nested in this timeline. */
  getChildren(nested?: boolean, tweens?: boolean, timelines?: boolean, ignoreBeforeTime?: number): Array<Tween | Timeline>;

  /** Returns the time associated with a particular label. */
  getLabelTime(label: string): number;

  /** Returns the tweens of a particular object that are inside this timeline. */
  getTweensOf(target: {}, nested?: boolean): Tween[];

  /**
   * Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded
   * starting values.
   */
  invalidate(): TimelineLite;

  /** Returns the most recently added child tween/timeline/callback regardless of its position in the timeline. */
  recent(): Animation;

  /** Removes a tween, timeline, callback, or label (or array of them) from the timeline. */
  remove(value: any): TimelineLite;

  /** Removes a label from the timeline and returns the time of that label. */
  removeLabel(label: string): any;

  /** Jumps to a specific time (or label) without affecting whether or not the instance is paused or reversed. */
  seek(position: string | number, supressEvents?: boolean): TimelineLite;

  /**
   * Adds a zero-duration tween to the end of the timeline (or elsewhere using the "position" parameter) that sets values immediately (when the virtual playhead reaches that
   * position on the timeline) - this is a convenience method that accomplishes exactly the same thing as add( TweenLite.to(target, 0, {...}) ) but with less code.
   */
  set(target: {}, vars: {}, position?: any): TimelineLite;

  /** Shifts the startTime of the timeline's children by a certain amount and optionally adjusts labels too. */
  shiftChildren(amount: number, adjustLabels?: boolean, ignoreBeforeTime?: number): TimelineLite;

  /**
   * Tweens an array of targets from a common set of destination values (using the current values as the destination), but staggers their start times by a specified amount of time,
   * creating an evenly-spaced sequence with a surprisingly small amount of code.
   */
  staggerFrom(
    targets: any,
    duration: number,
    vars: {},
    stagger?: number,
    position?: any,
    onCompleteAll?: (...args: any[]) => void,
    onCompleteAllParams?: any[],
    onCompleteScope?: any
  ): TimelineLite;

  /**
   * Tweens an array of targets from and to a common set of values, but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly
   * small amount of code.
   */
  staggerFromTo(
    targets: any,
    duration: number,
    fromVars: {},
    toVars: {},
    stagger?: number,
    position?: any,
    onCompleteAll?: (...args: any[]) => void,
    onCompleteAllParams?: any[],
    onCompleteAllScope?: any
  ): TimelineLite;

  /**
   * Tweens an array of targets to a common set of destination values, but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly
   * small amount of code.
   */
  staggerTo(
    targets: any,
    duration: number,
    vars: {},
    stagger: number,
    position?: any,
    onCompleteAll?: (...args: any[]) => void,
    onCompleteAllParams?: any[],
    onCompleteAllScope?: any
  ): TimelineLite;

  /**
   * Adds a TweenLite.to() tween to the end of the timeline (or elsewhere using the "position" parameter) - this is a convenience method that accomplishes exactly the same thing as
   * add( TweenLite.to(...) ) but with less code.
   */
  to(target: {}, duration: number, vars: {}, position?: any): TimelineLite;
  usesFrames(): boolean;

  /** If true, the timeline's timing mode is frames-based instead of seconds. */
  useFrames(): boolean;
}

export class TimelineMax extends TimelineLite {
  constructor(vars?: {});

  addCallback(callback: (...args: any[]) => void, position: any, params?: any[], scope?: any): TimelineMax;
  currentLabel(): string;
  currentLabel(value: string): TimelineMax;
  getActive(nested?: boolean, tweens?: boolean, timelines?: boolean): Tween | Timeline[];
  getLabelAfter(time: number): string;
  getLabelBefore(time: number): string;
  getLabelsArray(): Array<{ name: string; time: number }>;
  removeCallback(callback: (...args: any[]) => void, timeOrLabel?: any): TimelineMax;
  removePause(position: any): TimelineMax;
  repeat(): number;
  repeat(value: number): TimelineMax;
  repeatDelay(): number;
  repeatDelay(value: number): TimelineMax;
  tweenFromTo(fromPosition: any, toPosition: any, vars?: {}): TweenLite;
  tweenTo(position: any, vars?: {}): TweenLite;
  yoyo(): boolean;
  yoyo(value: boolean): TimelineMax;
}

export class Animation {
  /**
   * Base class for all TweenLite, TweenMax, TimelineLite, and TimelineMax classes, providing core methods/properties/() => voidality, but there is no reason to create an instance of this
   * class directly.
   */
  constructor(duration?: number, vars?: any);

  /**
   * A place to store any data you want (initially populated with vars.data if it exists).
   */
  data: any;

  /** [Read-only] Parent timeline. */
  timeline: SimpleTimeline;

  /** The vars object passed into the constructor which stores configuration variables like onComplete, onUpdate, etc. */
  vars: {};

  /** Gets or sets the animation's initial delay which is the length of time in seconds (or frames for frames-based tweens) before the animation should begin. */
  delay(): number;
  delay(value: number): Animation;

  /** Gets or sets the animation's duration, not including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
  duration(): number;
  duration(value: number): Animation;

  /**
   * Gets or sets an event callback like "onComplete", "onUpdate", "onStart", "onReverseComplete" or "onRepeat" (onRepeat only applies to TweenMax or TimelineMax instances) along with any
   * parameters that should be passed to that callback.
   */
  eventCallback(type: string): (...args: any[]) => void;
  eventCallback(type: string, callback: (...args: any[]) => void, params?: any[], scope?: any): Animation;

  /**
   * Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded
   * starting values.
   */
  invalidate(): Animation;

  /**
   * Indicates whether or not the animation is currently active (meaning the virtual playhead is actively moving across this instance's time span and it is not paused, nor are any of its
   * ancestor timelines).
   */
  isActive(): boolean;

  /** Kills the animation entirely or in part depending on the parameters. */
  kill(vars?: {}, target?: {}): Animation;

  /** Pauses the instance, optionally jumping to a specific time. */
  pause(atTime?: any, suppressEvents?: boolean): Animation;

  /** Gets or sets the animation's paused state which indicates whether or not the animation is currently paused. */
  paused(): boolean;
  paused(value: boolean): Animation;

  /** Begins playing forward, optionally from a specific time (by default playback begins from wherever the playhead currently is). */
  play(from?: any, suppressEvents?: boolean): Animation;

  /**
   * Gets or sets the animations's progress which is a value between 0 and 1 indicating the position of the virtual playhead (excluding repeats) where 0 is at the beginning, 0.5 is at the
   * halfway point, and 1 is at the end (complete).
   */
  progress(): number;
  progress(value: number, suppressEvents?: boolean): Animation;

  /** Restarts and begins playing forward from the beginning. */
  restart(includeDelay?: boolean, suppressEvents?: boolean): Animation;

  /** Resumes playing without altering direction (forward or reversed), optionally jumping to a specific time first. */
  resume(from?: any, suppressEvents?: boolean): Animation;

  /** Reverses playback so that all aspects of the animation are oriented backwards including, for example, a tween's ease. */
  reverse(from?: any, suppressEvents?: boolean): Animation;

  /** Gets or sets the animation's reversed state which indicates whether or not the animation should be played backwards. */
  reversed(): boolean;
  reversed(value: boolean): Animation;

  /** Jumps to a specific time without affecting whether or not the instance is paused or reversed. */
  seek(time: any, suppressEvents?: boolean): Animation;

  /** Gets or sets the time at which the animation begins on its parent timeline (after any delay that was defined). */
  startTime(): number;
  startTime(value: number): Animation;

  /**
   * Gets or sets the local position of the playhead (essentially the current time), described in seconds (or frames for frames-based animations) which will never be less than 0 or greater
   * than the animation's duration.
   */
  time(): number;
  time(value: number, suppressEvents?: boolean): Animation;

  /** Factor that's used to scale time in the animation where 1 = normal speed (the default), 0.5 = half speed, 2 = double speed, etc. */
  timeScale(): number;
  timeScale(value: number): Animation;

  /** Gets or sets the animation's total duration including any repeats or repeatDelays (which are only available in TweenMax and TimelineMax). */
  totalDuration(): number;
  totalDuration(value: number): Animation;

  /**
   * Gets or sets the animation's total progress which is a value between 0 and 1 indicating the position of the virtual playhead (including repeats) where 0 is at the beginning, 0.5 is at
   * the halfway point, and 1 is at the end (complete).
   */
  totalProgress(): number;
  totalProgress(value: number, suppressEvents?: boolean): Animation;

  /** Gets or sets the position of the playhead according to the totalDuration which includes any repeats and repeatDelays (only available in TweenMax and TimelineMax). */
  totalTime(): number;
  totalTime(time: number, suppressEvents?: boolean): Animation;
}

export type Tween = TweenLite | TweenMax;

export class TweenLite extends Animation {
  constructor(target: any, duration: number, vars: any);

  /** Provides An easy way to change the default easing equation. */
  static defaultEase: Ease;

  /** Provides An easy way to change the default overwrite mode. */
  static defaultOverwrite: string;

  /** The selector engine (like jQuery) that should be used when a tween receives a string as its target, like TweenLite.to("#myID", 1, {x:"100px"}). */
  static selector: (query: string) => any;

  /** Target object (or array of objects) whose properties the tween affects. */
  readonly target: any;

  /**
   * The object that dispatches a "tick" event each time the engine updates, making it easy for you to add your own listener(s) to run custom logic after each update
   * (great for game developers).
   */
  static ticker: any;

  /** Provides a simple way to call a () => void after a set amount of time (or frames). */
  static delayedCall(delay: number, callback: (...args: any[]) => void, params?: any[], scope?: any, useFrames?: boolean): TweenLite;

  /**
   * Static method for creating a TweenLite instance that tweens backwards - you define the BEGINNING values and the current values are used as the destination values which is great for doing
   * things like animating objects onto the screen because you can set them up initially the way you want them to look at the end of the tween and then animate in from elsewhere.
   */
  static from(target: any, duration: number, vars: any): TweenLite;

  /**
   * Static method for creating a TweenLite instance that allows you to define both the starting and ending values (as opposed to to() and from() tweens which are based on the target's
   * current values at one end or the other).
   */
  static fromTo(target: any, duration: number, fromVars: any, toVars: any): TweenLite;

  /**
   * Returns an array containing all the tweens of a particular target (or group of targets) that have not been released for garbage collection yet which typically happens within a few
   * seconds after the tween completes.
   */
  static getTweensOf(target: any, onlyActive?: boolean): TweenLite[];

  /**
   * [override] Clears any initialization data (like starting/ending values in tweens) which can be useful if, for example, you want to restart a tween without reverting to any previously
   * recorded starting values.
   */
  invalidate(): TweenLite;

  /** Immediately kills all of the delayedCalls to a particular () => void. */
  static killDelayedCallsTo(func: (...args: any[]) => void): void;

  /** Kills all the tweens (or specific tweening properties) of a particular object or delayedCalls to a particular () => void. */
  static killTweensOf(target: any, onlyActive?: boolean, vars?: any): void;

  /** Permits you to control what happens when too much time elapses between two ticks (updates) of the engine, adjusting the core timing mechanism to compensate and avoid "jumps". */
  static lagSmoothing(threshold: number, adjustedLag: number): void;

  /**
   * Forces a render of all active tweens which can be useful if, for example, you set up a bunch of from() tweens and then you need to force an immediate render (even of "lazy" tweens) to
   * avoid a brief delay before things render on the very next tick.
   */
  static render(): void;

  /** Immediately sets properties of the target accordingly - essentially a zero-duration to() tween with a more intuitive name. */
  static set(target: any, vars: any): TweenLite;

  /** Static method for creating a TweenLite instance that animates to the specified destination values (from the current values). */
  static to(target: any, duration: number, vars: any): TweenLite;
}

export class TweenMax extends TweenLite {
  constructor(target: {}, duration: number, vars: {});

  /** Provides a simple way to call a () => void after a set amount of time (or frames). */
  static delayedCall(delay: number, callback: (...args: any[]) => void, params?: any[], scope?: {}, useFrames?: boolean): TweenMax;

  /**
   * Static method for creating a TweenMax instance that tweens backwards - you define the BEGINNING values and the current values are used as the destination values which is great for
   * doing things like animating objects onto the screen because you can set them up initially the way you want them to look at the end of the tween and then animate in from elsewhere.
   */
  static from(target: {}, duration: number, vars: {}): TweenMax;

  /**
   * Static method for creating a TweenMax instance that allows you to define both the starting and ending values (as opposed to to() and from() tweens which are based on the target's
   * current values at one end or the other).
   */
  static fromTo(target: {}, duration: number, fromVars: {}, toVars: {}): TweenMax;

  /** Returns an array containing all tweens (and optionally timelines too, excluding the root timelines). */
  static getAllTweens(includeTimelines?: boolean): Tween[];

  /**
   * Returns an array containing all the tweens of a particular target (or group of targets) that have not been released for garbage collection yet which typically happens within a
   * few seconds after the tween completes.
   */
  static getTweensOf(target: {}): Tween[];

  /** Gets or sets the global timeScale which is a multiplier that affects ALL animations equally. This is a great way to globally speed up or slow down all animations at once. */
  static globalTimeScale(value?: number): number;

  /** Reports whether or not a particular object is actively tweening. */
  static isTweening(target: {}): boolean;

  /** Kills all tweens and/or delayedCalls/callbacks, and/or timelines, optionally forcing them to completion first. */
  static killAll(complete?: boolean, tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;

  /** Kills all tweens of the children of a particular DOM element, optionally forcing them to completion first. */
  static killChildTweensOf(parent: any, complete?: boolean): void;

  /** Immediately kills all of the delayedCalls to a particular () => void. */
  static killDelayedCallsTo(func: (...args: any[]) => void): void;

  /** Kills all the tweens (or specific tweening properties) of a particular object or the delayedCalls to a particular () => void. */
  static killTweensOf(target: {}, vars?: {}): void;

  /** Pauses all tweens and/or delayedCalls/callbacks and/or timelines. */
  static pauseAll(tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;

  /**
   * Gets or sets the tween's progress which is a value between 0 and 1 indicating the position of the virtual playhead (excluding repeats) where 0 is at the beginning, 0.5 is halfway
   * complete, and 1 is complete.
   */
  repeat(): number;
  repeat(value: number): TweenMax;

  /** Gets or sets the amount of time in seconds (or frames for frames-based tweens) between repeats. */
  repeatDelay(): number;
  repeatDelay(value: number): TweenMax;

  /** Resumes all paused tweens and/or delayedCalls/callbacks and/or timelines. */
  static resumeAll(tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;

  /** Immediately sets properties of the target accordingly - essentially a zero-duration to() tween with a more intuitive name. */
  static set(target: {}, vars: {}): TweenMax;

  /**
   * Tweens an array of targets from a common set of destination values (using the current values as the destination), but staggers their start times by a specified amount of time, creating
   * an evenly-spaced sequence with a surprisingly small amount of code.
   */
  static staggerFrom(
    targets: any,
    duration: number,
    vars: {},
    stagger: number,
    onCompleteAll?: (...args: any[]) => void,
    onCompleteAllParams?: any[],
    onCompleteAllScope?: any
  ): any[];

  /**
   * Tweens an array of targets from a common set of destination values to a common set of destination values, but staggers their start times by a specified amount of time, creating an
   * evenly-spaced sequence with a surprisingly small amount of code.
   */
  static staggerFromTo(
    targets: any,
    duration: number,
    fromVars: {},
    toVars: {},
    stagger: number,
    onCompleteAll?: (...args: any[]) => void,
    onCompleteAllParams?: any[],
    onCompleteAllScope?: any
  ): any[];

  /**
   * Tweens an array of targets to a common set of destination values, but staggers their start times by a specified amount of time, creating an evenly-spaced sequence with a surprisingly
   * small amount of code.
   */
  static staggerTo(
    targets: any,
    duration: number,
    vars: {},
    stagger: number,
    onCompleteAll?: (...args: any[]) => void,
    onCompleteAllParams?: any[],
    onCompleteAllScope?: any
  ): any[];

  /** Static method for creating a TweenMax instance that animates to the specified destination values (from the current values). */
  static to(target: {}, duration: number, vars: TweenConfig): TweenMax;

  /** Updates tweening values on the fly so that they appear to seamlessly change course even if the tween is in-progress. */
  updateTo(vars: {}, resetDuration?: boolean): TweenMax;

  /** Gets or sets the tween's yoyo state, where true causes the tween to go back and forth, alternating backward and forward on each repeat. */
  yoyo(): boolean;
  yoyo(value?: boolean): TweenMax;
}

export interface BezierPlugin extends TweenPlugin {
  bezierThrough(values: any[], curviness?: number, quadratic?: boolean, correlate?: string, prepend?: {}, calcDifs?: boolean): {};
  cubicToQuadratic(a: number, b: number, c: number, d: number): any[];
  quadraticToCubic(a: number, b: number, c: number): {};
}

export interface CSSRulePlugin extends TweenPlugin {
  getRule(selector: string): {};
}

export interface TweenPlugin {
  activate(plugins: any[]): boolean;
}
