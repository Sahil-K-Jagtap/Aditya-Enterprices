(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEmblaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-client] (ecmascript)");
;
;
;
function useEmblaCarousel(options = {}, plugins = []) {
    const storedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(options);
    const storedPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(plugins);
    const [emblaApi, setEmblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const reInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEmblaCarousel.useCallback[reInit]": ()=>{
            if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
        }
    }["useEmblaCarousel.useCallback[reInit]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areOptionsEqual"])(storedOptions.current, options)) return;
            storedOptions.current = options;
            reInit();
        }
    }["useEmblaCarousel.useEffect"], [
        options,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arePluginsEqual"])(storedPlugins.current, plugins)) return;
            storedPlugins.current = plugins;
            reInit();
        }
    }["useEmblaCarousel.useEffect"], [
        plugins,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"])() && viewport) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].globalOptions = useEmblaCarousel.globalOptions;
                const newEmblaApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(viewport, storedOptions.current, storedPlugins.current);
                setEmblaApi(newEmblaApi);
                return ({
                    "useEmblaCarousel.useEffect": ()=>newEmblaApi.destroy()
                })["useEmblaCarousel.useEffect"];
            } else {
                setEmblaApi(undefined);
            }
        }
    }["useEmblaCarousel.useEffect"], [
        viewport,
        setEmblaApi
    ]);
    return [
        setViewport,
        emblaApi
    ];
}
useEmblaCarousel.globalOptions = undefined;
;
}),
"[project]/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areOptionsEqual",
    ()=>areOptionsEqual,
    "arePluginsEqual",
    ()=>arePluginsEqual,
    "canUseDOM",
    ()=>canUseDOM,
    "sortAndMapPluginToOptions",
    ()=>sortAndMapPluginToOptions
]);
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function isRecord(subject) {
    return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
    const optionsAKeys = Object.keys(optionsA);
    const optionsBKeys = Object.keys(optionsB);
    if (optionsAKeys.length !== optionsBKeys.length) return false;
    const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
    const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
    if (breakpointsA !== breakpointsB) return false;
    return optionsAKeys.every((key)=>{
        const valueA = optionsA[key];
        const valueB = optionsB[key];
        if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;
        if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
        return areOptionsEqual(valueA, valueB);
    });
}
function sortAndMapPluginToOptions(plugins) {
    return plugins.concat().sort((a, b)=>a.name > b.name ? 1 : -1).map((plugin)=>plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
    if (pluginsA.length !== pluginsB.length) return false;
    const optionsA = sortAndMapPluginToOptions(pluginsA);
    const optionsB = sortAndMapPluginToOptions(pluginsB);
    return optionsA.every((optionA, index)=>{
        const optionB = optionsB[index];
        return areOptionsEqual(optionA, optionB);
    });
}
;
}),
"[project]/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmblaCarousel
]);
function isNumber(subject) {
    return typeof subject === 'number';
}
function isString(subject) {
    return typeof subject === 'string';
}
function isBoolean(subject) {
    return typeof subject === 'boolean';
}
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
    return Math.abs(n);
}
function mathSign(n) {
    return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
    return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
    if (valueB === 0 || valueA === 0) return 0;
    if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
    const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
    return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
    return objectKeys(array).map(Number);
}
function arrayLast(array) {
    return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
    return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
    return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
    return Array.from(Array(n), (_, i)=>startAt + i);
}
function objectKeys(object) {
    return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
    return [
        objectA,
        objectB
    ].reduce((mergedObjects, currentObject)=>{
        objectKeys(currentObject).forEach((key)=>{
            const valueA = mergedObjects[key];
            const valueB = currentObject[key];
            const areObjects = isObject(valueA) && isObject(valueB);
            mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
        });
        return mergedObjects;
    }, {});
}
function isMouseEvent(evt, ownerWindow) {
    return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
    const predefined = {
        start,
        center,
        end
    };
    function start() {
        return 0;
    }
    function center(n) {
        return end(n) / 2;
    }
    function end(n) {
        return viewSize - n;
    }
    function measure(n, index) {
        if (isString(align)) return predefined[align](n);
        return align(viewSize, n, index);
    }
    const self = {
        measure
    };
    return self;
}
function EventStore() {
    let listeners = [];
    function add(node, type, handler, options = {
        passive: true
    }) {
        let removeListener;
        if ('addEventListener' in node) {
            node.addEventListener(type, handler, options);
            removeListener = ()=>node.removeEventListener(type, handler, options);
        } else {
            const legacyMediaQueryList = node;
            legacyMediaQueryList.addListener(handler);
            removeListener = ()=>legacyMediaQueryList.removeListener(handler);
        }
        listeners.push(removeListener);
        return self;
    }
    function clear() {
        listeners = listeners.filter((remove)=>remove());
    }
    const self = {
        add,
        clear
    };
    return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
    const documentVisibleHandler = EventStore();
    const fixedTimeStep = 1000 / 60;
    let lastTimeStamp = null;
    let accumulatedTime = 0;
    let animationId = 0;
    function init() {
        documentVisibleHandler.add(ownerDocument, 'visibilitychange', ()=>{
            if (ownerDocument.hidden) reset();
        });
    }
    function destroy() {
        stop();
        documentVisibleHandler.clear();
    }
    function animate(timeStamp) {
        if (!animationId) return;
        if (!lastTimeStamp) {
            lastTimeStamp = timeStamp;
            update();
            update();
        }
        const timeElapsed = timeStamp - lastTimeStamp;
        lastTimeStamp = timeStamp;
        accumulatedTime += timeElapsed;
        while(accumulatedTime >= fixedTimeStep){
            update();
            accumulatedTime -= fixedTimeStep;
        }
        const alpha = accumulatedTime / fixedTimeStep;
        render(alpha);
        if (animationId) {
            animationId = ownerWindow.requestAnimationFrame(animate);
        }
    }
    function start() {
        if (animationId) return;
        animationId = ownerWindow.requestAnimationFrame(animate);
    }
    function stop() {
        ownerWindow.cancelAnimationFrame(animationId);
        lastTimeStamp = null;
        accumulatedTime = 0;
        animationId = 0;
    }
    function reset() {
        lastTimeStamp = null;
        accumulatedTime = 0;
    }
    const self = {
        init,
        destroy,
        start,
        stop,
        update,
        render
    };
    return self;
}
function Axis(axis, contentDirection) {
    const isRightToLeft = contentDirection === 'rtl';
    const isVertical = axis === 'y';
    const scroll = isVertical ? 'y' : 'x';
    const cross = isVertical ? 'x' : 'y';
    const sign = !isVertical && isRightToLeft ? -1 : 1;
    const startEdge = getStartEdge();
    const endEdge = getEndEdge();
    function measureSize(nodeRect) {
        const { height, width } = nodeRect;
        return isVertical ? height : width;
    }
    function getStartEdge() {
        if (isVertical) return 'top';
        return isRightToLeft ? 'right' : 'left';
    }
    function getEndEdge() {
        if (isVertical) return 'bottom';
        return isRightToLeft ? 'left' : 'right';
    }
    function direction(n) {
        return n * sign;
    }
    const self = {
        scroll,
        cross,
        startEdge,
        endEdge,
        measureSize,
        direction
    };
    return self;
}
function Limit(min = 0, max = 0) {
    const length = mathAbs(min - max);
    function reachedMin(n) {
        return n < min;
    }
    function reachedMax(n) {
        return n > max;
    }
    function reachedAny(n) {
        return reachedMin(n) || reachedMax(n);
    }
    function constrain(n) {
        if (!reachedAny(n)) return n;
        return reachedMin(n) ? min : max;
    }
    function removeOffset(n) {
        if (!length) return n;
        return n - length * Math.ceil((n - max) / length);
    }
    const self = {
        length,
        max,
        min,
        constrain,
        reachedAny,
        reachedMax,
        reachedMin,
        removeOffset
    };
    return self;
}
function Counter(max, start, loop) {
    const { constrain } = Limit(0, max);
    const loopEnd = max + 1;
    let counter = withinLimit(start);
    function withinLimit(n) {
        return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
    }
    function get() {
        return counter;
    }
    function set(n) {
        counter = withinLimit(n);
        return self;
    }
    function add(n) {
        return clone().set(get() + n);
    }
    function clone() {
        return Counter(max, get(), loop);
    }
    const self = {
        get,
        set,
        add,
        clone
    };
    return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
    const { cross: crossAxis, direction } = axis;
    const focusNodes = [
        'INPUT',
        'SELECT',
        'TEXTAREA'
    ];
    const nonPassiveEvent = {
        passive: false
    };
    const initEvents = EventStore();
    const dragEvents = EventStore();
    const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
    const snapForceBoost = {
        mouse: 300,
        touch: 400
    };
    const freeForceBoost = {
        mouse: 500,
        touch: 600
    };
    const baseSpeed = dragFree ? 43 : 25;
    let isMoving = false;
    let startScroll = 0;
    let startCross = 0;
    let pointerIsDown = false;
    let preventScroll = false;
    let preventClick = false;
    let isMouse = false;
    function init(emblaApi) {
        if (!watchDrag) return;
        function downIfAllowed(evt) {
            if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
        }
        const node = rootNode;
        initEvents.add(node, 'dragstart', (evt)=>evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', ()=>undefined, nonPassiveEvent).add(node, 'touchend', ()=>undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
    }
    function destroy() {
        initEvents.clear();
        dragEvents.clear();
    }
    function addDragEvents() {
        const node = isMouse ? ownerDocument : rootNode;
        dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
    }
    function isFocusNode(node) {
        const nodeName = node.nodeName || '';
        return focusNodes.includes(nodeName);
    }
    function forceBoost() {
        const boost = dragFree ? freeForceBoost : snapForceBoost;
        const type = isMouse ? 'mouse' : 'touch';
        return boost[type];
    }
    function allowedForce(force, targetChanged) {
        const next = index.add(mathSign(force) * -1);
        const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
        if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
        if (skipSnaps && targetChanged) return baseForce * 0.5;
        return scrollTarget.byIndex(next.get(), 0).distance;
    }
    function down(evt) {
        const isMouseEvt = isMouseEvent(evt, ownerWindow);
        isMouse = isMouseEvt;
        preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
        isMoving = deltaAbs(target.get(), location.get()) >= 2;
        if (isMouseEvt && evt.button !== 0) return;
        if (isFocusNode(evt.target)) return;
        pointerIsDown = true;
        dragTracker.pointerDown(evt);
        scrollBody.useFriction(0).useDuration(0);
        target.set(location);
        addDragEvents();
        startScroll = dragTracker.readPoint(evt);
        startCross = dragTracker.readPoint(evt, crossAxis);
        eventHandler.emit('pointerDown');
    }
    function move(evt) {
        const isTouchEvt = !isMouseEvent(evt, ownerWindow);
        if (isTouchEvt && evt.touches.length >= 2) return up(evt);
        const lastScroll = dragTracker.readPoint(evt);
        const lastCross = dragTracker.readPoint(evt, crossAxis);
        const diffScroll = deltaAbs(lastScroll, startScroll);
        const diffCross = deltaAbs(lastCross, startCross);
        if (!preventScroll && !isMouse) {
            if (!evt.cancelable) return up(evt);
            preventScroll = diffScroll > diffCross;
            if (!preventScroll) return up(evt);
        }
        const diff = dragTracker.pointerMove(evt);
        if (diffScroll > dragThreshold) preventClick = true;
        scrollBody.useFriction(0.3).useDuration(0.75);
        animation.start();
        target.add(direction(diff));
        evt.preventDefault();
    }
    function up(evt) {
        const currentLocation = scrollTarget.byDistance(0, false);
        const targetChanged = currentLocation.index !== index.get();
        const rawForce = dragTracker.pointerUp(evt) * forceBoost();
        const force = allowedForce(direction(rawForce), targetChanged);
        const forceFactor = factorAbs(rawForce, force);
        const speed = baseSpeed - 10 * forceFactor;
        const friction = baseFriction + forceFactor / 50;
        preventScroll = false;
        pointerIsDown = false;
        dragEvents.clear();
        scrollBody.useDuration(speed).useFriction(friction);
        scrollTo.distance(force, !dragFree);
        isMouse = false;
        eventHandler.emit('pointerUp');
    }
    function click(evt) {
        if (preventClick) {
            evt.stopPropagation();
            evt.preventDefault();
            preventClick = false;
        }
    }
    function pointerDown() {
        return pointerIsDown;
    }
    const self = {
        init,
        destroy,
        pointerDown
    };
    return self;
}
function DragTracker(axis, ownerWindow) {
    const logInterval = 170;
    let startEvent;
    let lastEvent;
    function readTime(evt) {
        return evt.timeStamp;
    }
    function readPoint(evt, evtAxis) {
        const property = evtAxis || axis.scroll;
        const coord = `client${property === 'x' ? 'X' : 'Y'}`;
        return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
    }
    function pointerDown(evt) {
        startEvent = evt;
        lastEvent = evt;
        return readPoint(evt);
    }
    function pointerMove(evt) {
        const diff = readPoint(evt) - readPoint(lastEvent);
        const expired = readTime(evt) - readTime(startEvent) > logInterval;
        lastEvent = evt;
        if (expired) startEvent = evt;
        return diff;
    }
    function pointerUp(evt) {
        if (!startEvent || !lastEvent) return 0;
        const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
        const diffTime = readTime(evt) - readTime(startEvent);
        const expired = readTime(evt) - readTime(lastEvent) > logInterval;
        const force = diffDrag / diffTime;
        const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
        return isFlick ? force : 0;
    }
    const self = {
        pointerDown,
        pointerMove,
        pointerUp,
        readPoint
    };
    return self;
}
function NodeRects() {
    function measure(node) {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
        const offset = {
            top: offsetTop,
            right: offsetLeft + offsetWidth,
            bottom: offsetTop + offsetHeight,
            left: offsetLeft,
            width: offsetWidth,
            height: offsetHeight
        };
        return offset;
    }
    const self = {
        measure
    };
    return self;
}
function PercentOfView(viewSize) {
    function measure(n) {
        return viewSize * (n / 100);
    }
    const self = {
        measure
    };
    return self;
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
    const observeNodes = [
        container
    ].concat(slides);
    let resizeObserver;
    let containerSize;
    let slideSizes = [];
    let destroyed = false;
    function readSize(node) {
        return axis.measureSize(nodeRects.measure(node));
    }
    function init(emblaApi) {
        if (!watchResize) return;
        containerSize = readSize(container);
        slideSizes = slides.map(readSize);
        function defaultCallback(entries) {
            for (const entry of entries){
                if (destroyed) return;
                const isContainer = entry.target === container;
                const slideIndex = slides.indexOf(entry.target);
                const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
                const newSize = readSize(isContainer ? container : slides[slideIndex]);
                const diffSize = mathAbs(newSize - lastSize);
                if (diffSize >= 0.5) {
                    emblaApi.reInit();
                    eventHandler.emit('resize');
                    break;
                }
            }
        }
        resizeObserver = new ResizeObserver((entries)=>{
            if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
                defaultCallback(entries);
            }
        });
        ownerWindow.requestAnimationFrame(()=>{
            observeNodes.forEach((node)=>resizeObserver.observe(node));
        });
    }
    function destroy() {
        destroyed = true;
        if (resizeObserver) resizeObserver.disconnect();
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
    let scrollVelocity = 0;
    let scrollDirection = 0;
    let scrollDuration = baseDuration;
    let scrollFriction = baseFriction;
    let rawLocation = location.get();
    let rawLocationPrevious = 0;
    function seek() {
        const displacement = target.get() - location.get();
        const isInstant = !scrollDuration;
        let scrollDistance = 0;
        if (isInstant) {
            scrollVelocity = 0;
            previousLocation.set(target);
            location.set(target);
            scrollDistance = displacement;
        } else {
            previousLocation.set(location);
            scrollVelocity += displacement / scrollDuration;
            scrollVelocity *= scrollFriction;
            rawLocation += scrollVelocity;
            location.add(scrollVelocity);
            scrollDistance = rawLocation - rawLocationPrevious;
        }
        scrollDirection = mathSign(scrollDistance);
        rawLocationPrevious = rawLocation;
        return self;
    }
    function settled() {
        const diff = target.get() - offsetLocation.get();
        return mathAbs(diff) < 0.001;
    }
    function duration() {
        return scrollDuration;
    }
    function direction() {
        return scrollDirection;
    }
    function velocity() {
        return scrollVelocity;
    }
    function useBaseDuration() {
        return useDuration(baseDuration);
    }
    function useBaseFriction() {
        return useFriction(baseFriction);
    }
    function useDuration(n) {
        scrollDuration = n;
        return self;
    }
    function useFriction(n) {
        scrollFriction = n;
        return self;
    }
    const self = {
        direction,
        duration,
        velocity,
        seek,
        settled,
        useBaseFriction,
        useBaseDuration,
        useFriction,
        useDuration
    };
    return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
    const pullBackThreshold = percentOfView.measure(10);
    const edgeOffsetTolerance = percentOfView.measure(50);
    const frictionLimit = Limit(0.1, 0.99);
    let disabled = false;
    function shouldConstrain() {
        if (disabled) return false;
        if (!limit.reachedAny(target.get())) return false;
        if (!limit.reachedAny(location.get())) return false;
        return true;
    }
    function constrain(pointerDown) {
        if (!shouldConstrain()) return;
        const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
        const diffToEdge = mathAbs(limit[edge] - location.get());
        const diffToTarget = target.get() - location.get();
        const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
        target.subtract(diffToTarget * friction);
        if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
            target.set(limit.constrain(target.get()));
            scrollBody.useDuration(25).useBaseFriction();
        }
    }
    function toggleActive(active) {
        disabled = !active;
    }
    const self = {
        shouldConstrain,
        constrain,
        toggleActive
    };
    return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
    const scrollBounds = Limit(-contentSize + viewSize, 0);
    const snapsBounded = measureBounded();
    const scrollContainLimit = findScrollContainLimit();
    const snapsContained = measureContained();
    function usePixelTolerance(bound, snap) {
        return deltaAbs(bound, snap) <= 1;
    }
    function findScrollContainLimit() {
        const startSnap = snapsBounded[0];
        const endSnap = arrayLast(snapsBounded);
        const min = snapsBounded.lastIndexOf(startSnap);
        const max = snapsBounded.indexOf(endSnap) + 1;
        return Limit(min, max);
    }
    function measureBounded() {
        return snapsAligned.map((snapAligned, index)=>{
            const { min, max } = scrollBounds;
            const snap = scrollBounds.constrain(snapAligned);
            const isFirst = !index;
            const isLast = arrayIsLastIndex(snapsAligned, index);
            if (isFirst) return max;
            if (isLast) return min;
            if (usePixelTolerance(min, snap)) return min;
            if (usePixelTolerance(max, snap)) return max;
            return snap;
        }).map((scrollBound)=>parseFloat(scrollBound.toFixed(3)));
    }
    function measureContained() {
        if (contentSize <= viewSize + pixelTolerance) return [
            scrollBounds.max
        ];
        if (containScroll === 'keepSnaps') return snapsBounded;
        const { min, max } = scrollContainLimit;
        return snapsBounded.slice(min, max);
    }
    const self = {
        snapsContained,
        scrollContainLimit
    };
    return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
    const max = scrollSnaps[0];
    const min = loop ? max - contentSize : arrayLast(scrollSnaps);
    const limit = Limit(min, max);
    const self = {
        limit
    };
    return self;
}
function ScrollLooper(contentSize, limit, location, vectors) {
    const jointSafety = 0.1;
    const min = limit.min + jointSafety;
    const max = limit.max + jointSafety;
    const { reachedMin, reachedMax } = Limit(min, max);
    function shouldLoop(direction) {
        if (direction === 1) return reachedMax(location.get());
        if (direction === -1) return reachedMin(location.get());
        return false;
    }
    function loop(direction) {
        if (!shouldLoop(direction)) return;
        const loopDistance = contentSize * (direction * -1);
        vectors.forEach((v)=>v.add(loopDistance));
    }
    const self = {
        loop
    };
    return self;
}
function ScrollProgress(limit) {
    const { max, length } = limit;
    function get(n) {
        const currentLocation = n - max;
        return length ? currentLocation / -length : 0;
    }
    const self = {
        get
    };
    return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
    const { startEdge, endEdge } = axis;
    const { groupSlides } = slidesToScroll;
    const alignments = measureSizes().map(alignment.measure);
    const snaps = measureUnaligned();
    const snapsAligned = measureAligned();
    function measureSizes() {
        return groupSlides(slideRects).map((rects)=>arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
    }
    function measureUnaligned() {
        return slideRects.map((rect)=>containerRect[startEdge] - rect[startEdge]).map((snap)=>-mathAbs(snap));
    }
    function measureAligned() {
        return groupSlides(snaps).map((g)=>g[0]).map((snap, index)=>snap + alignments[index]);
    }
    const self = {
        snaps,
        snapsAligned
    };
    return self;
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
    const { groupSlides } = slidesToScroll;
    const { min, max } = scrollContainLimit;
    const slideRegistry = createSlideRegistry();
    function createSlideRegistry() {
        const groupedSlideIndexes = groupSlides(slideIndexes);
        const doNotContain = !containSnaps || containScroll === 'keepSnaps';
        if (scrollSnaps.length === 1) return [
            slideIndexes
        ];
        if (doNotContain) return groupedSlideIndexes;
        return groupedSlideIndexes.slice(min, max).map((group, index, groups)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(groups, index);
            if (isFirst) {
                const range = arrayLast(groups[0]) + 1;
                return arrayFromNumber(range);
            }
            if (isLast) {
                const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
                return arrayFromNumber(range, arrayLast(groups)[0]);
            }
            return group;
        });
    }
    const self = {
        slideRegistry
    };
    return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
    const { reachedAny, removeOffset, constrain } = limit;
    function minDistance(distances) {
        return distances.concat().sort((a, b)=>mathAbs(a) - mathAbs(b))[0];
    }
    function findTargetSnap(target) {
        const distance = loop ? removeOffset(target) : constrain(target);
        const ascDiffsToSnaps = scrollSnaps.map((snap, index)=>({
                diff: shortcut(snap - distance, 0),
                index
            })).sort((d1, d2)=>mathAbs(d1.diff) - mathAbs(d2.diff));
        const { index } = ascDiffsToSnaps[0];
        return {
            index,
            distance
        };
    }
    function shortcut(target, direction) {
        const targets = [
            target,
            target + contentSize,
            target - contentSize
        ];
        if (!loop) return target;
        if (!direction) return minDistance(targets);
        const matchingTargets = targets.filter((t)=>mathSign(t) === direction);
        if (matchingTargets.length) return minDistance(matchingTargets);
        return arrayLast(targets) - contentSize;
    }
    function byIndex(index, direction) {
        const diffToSnap = scrollSnaps[index] - targetVector.get();
        const distance = shortcut(diffToSnap, direction);
        return {
            index,
            distance
        };
    }
    function byDistance(distance, snap) {
        const target = targetVector.get() + distance;
        const { index, distance: targetSnapDistance } = findTargetSnap(target);
        const reachedBound = !loop && reachedAny(target);
        if (!snap || reachedBound) return {
            index,
            distance
        };
        const diffToSnap = scrollSnaps[index] - targetSnapDistance;
        const snapDistance = distance + shortcut(diffToSnap, 0);
        return {
            index,
            distance: snapDistance
        };
    }
    const self = {
        byDistance,
        byIndex,
        shortcut
    };
    return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
    function scrollTo(target) {
        const distanceDiff = target.distance;
        const indexDiff = target.index !== indexCurrent.get();
        targetVector.add(distanceDiff);
        if (distanceDiff) {
            if (scrollBody.duration()) {
                animation.start();
            } else {
                animation.update();
                animation.render(1);
                animation.update();
            }
        }
        if (indexDiff) {
            indexPrevious.set(indexCurrent.get());
            indexCurrent.set(target.index);
            eventHandler.emit('select');
        }
    }
    function distance(n, snap) {
        const target = scrollTarget.byDistance(n, snap);
        scrollTo(target);
    }
    function index(n, direction) {
        const targetIndex = indexCurrent.clone().set(n);
        const target = scrollTarget.byIndex(targetIndex.get(), direction);
        scrollTo(target);
    }
    const self = {
        distance,
        index
    };
    return self;
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
    const focusListenerOptions = {
        passive: true,
        capture: true
    };
    let lastTabPressTime = 0;
    function init(emblaApi) {
        if (!watchFocus) return;
        function defaultCallback(index) {
            const nowTime = new Date().getTime();
            const diffTime = nowTime - lastTabPressTime;
            if (diffTime > 10) return;
            eventHandler.emit('slideFocusStart');
            root.scrollLeft = 0;
            const group = slideRegistry.findIndex((group)=>group.includes(index));
            if (!isNumber(group)) return;
            scrollBody.useDuration(0);
            scrollTo.index(group, 0);
            eventHandler.emit('slideFocus');
        }
        eventStore.add(document, 'keydown', registerTabPress, false);
        slides.forEach((slide, slideIndex)=>{
            eventStore.add(slide, 'focus', (evt)=>{
                if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
                    defaultCallback(slideIndex);
                }
            }, focusListenerOptions);
        });
    }
    function registerTabPress(event) {
        if (event.code === 'Tab') lastTabPressTime = new Date().getTime();
    }
    const self = {
        init
    };
    return self;
}
function Vector1D(initialValue) {
    let value = initialValue;
    function get() {
        return value;
    }
    function set(n) {
        value = normalizeInput(n);
    }
    function add(n) {
        value += normalizeInput(n);
    }
    function subtract(n) {
        value -= normalizeInput(n);
    }
    function normalizeInput(n) {
        return isNumber(n) ? n : n.get();
    }
    const self = {
        get,
        set,
        add,
        subtract
    };
    return self;
}
function Translate(axis, container) {
    const translate = axis.scroll === 'x' ? x : y;
    const containerStyle = container.style;
    let previousTarget = null;
    let disabled = false;
    function x(n) {
        return `translate3d(${n}px,0px,0px)`;
    }
    function y(n) {
        return `translate3d(0px,${n}px,0px)`;
    }
    function to(target) {
        if (disabled) return;
        const newTarget = roundToTwoDecimals(axis.direction(target));
        if (newTarget === previousTarget) return;
        containerStyle.transform = translate(newTarget);
        previousTarget = newTarget;
    }
    function toggleActive(active) {
        disabled = !active;
    }
    function clear() {
        if (disabled) return;
        containerStyle.transform = '';
        if (!container.getAttribute('style')) container.removeAttribute('style');
    }
    const self = {
        clear,
        to,
        toggleActive
    };
    return self;
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
    const roundingSafety = 0.5;
    const ascItems = arrayKeys(slideSizesWithGaps);
    const descItems = arrayKeys(slideSizesWithGaps).reverse();
    const loopPoints = startPoints().concat(endPoints());
    function removeSlideSizes(indexes, from) {
        return indexes.reduce((a, i)=>{
            return a - slideSizesWithGaps[i];
        }, from);
    }
    function slidesInGap(indexes, gap) {
        return indexes.reduce((a, i)=>{
            const remainingGap = removeSlideSizes(a, gap);
            return remainingGap > 0 ? a.concat([
                i
            ]) : a;
        }, []);
    }
    function findSlideBounds(offset) {
        return snaps.map((snap, index)=>({
                start: snap - slideSizes[index] + roundingSafety + offset,
                end: snap + viewSize - roundingSafety + offset
            }));
    }
    function findLoopPoints(indexes, offset, isEndEdge) {
        const slideBounds = findSlideBounds(offset);
        return indexes.map((index)=>{
            const initial = isEndEdge ? 0 : -contentSize;
            const altered = isEndEdge ? contentSize : 0;
            const boundEdge = isEndEdge ? 'end' : 'start';
            const loopPoint = slideBounds[index][boundEdge];
            return {
                index,
                loopPoint,
                slideLocation: Vector1D(-1),
                translate: Translate(axis, slides[index]),
                target: ()=>location.get() > loopPoint ? initial : altered
            };
        });
    }
    function startPoints() {
        const gap = scrollSnaps[0];
        const indexes = slidesInGap(descItems, gap);
        return findLoopPoints(indexes, contentSize, false);
    }
    function endPoints() {
        const gap = viewSize - scrollSnaps[0] - 1;
        const indexes = slidesInGap(ascItems, gap);
        return findLoopPoints(indexes, -contentSize, true);
    }
    function canLoop() {
        return loopPoints.every(({ index })=>{
            const otherIndexes = ascItems.filter((i)=>i !== index);
            return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
        });
    }
    function loop() {
        loopPoints.forEach((loopPoint)=>{
            const { target, translate, slideLocation } = loopPoint;
            const shiftLocation = target();
            if (shiftLocation === slideLocation.get()) return;
            translate.to(shiftLocation);
            slideLocation.set(shiftLocation);
        });
    }
    function clear() {
        loopPoints.forEach((loopPoint)=>loopPoint.translate.clear());
    }
    const self = {
        canLoop,
        clear,
        loop,
        loopPoints
    };
    return self;
}
function SlidesHandler(container, eventHandler, watchSlides) {
    let mutationObserver;
    let destroyed = false;
    function init(emblaApi) {
        if (!watchSlides) return;
        function defaultCallback(mutations) {
            for (const mutation of mutations){
                if (mutation.type === 'childList') {
                    emblaApi.reInit();
                    eventHandler.emit('slidesChanged');
                    break;
                }
            }
        }
        mutationObserver = new MutationObserver((mutations)=>{
            if (destroyed) return;
            if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
                defaultCallback(mutations);
            }
        });
        mutationObserver.observe(container, {
            childList: true
        });
    }
    function destroy() {
        if (mutationObserver) mutationObserver.disconnect();
        destroyed = true;
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function SlidesInView(container, slides, eventHandler, threshold) {
    const intersectionEntryMap = {};
    let inViewCache = null;
    let notInViewCache = null;
    let intersectionObserver;
    let destroyed = false;
    function init() {
        intersectionObserver = new IntersectionObserver((entries)=>{
            if (destroyed) return;
            entries.forEach((entry)=>{
                const index = slides.indexOf(entry.target);
                intersectionEntryMap[index] = entry;
            });
            inViewCache = null;
            notInViewCache = null;
            eventHandler.emit('slidesInView');
        }, {
            root: container.parentElement,
            threshold
        });
        slides.forEach((slide)=>intersectionObserver.observe(slide));
    }
    function destroy() {
        if (intersectionObserver) intersectionObserver.disconnect();
        destroyed = true;
    }
    function createInViewList(inView) {
        return objectKeys(intersectionEntryMap).reduce((list, slideIndex)=>{
            const index = parseInt(slideIndex);
            const { isIntersecting } = intersectionEntryMap[index];
            const inViewMatch = inView && isIntersecting;
            const notInViewMatch = !inView && !isIntersecting;
            if (inViewMatch || notInViewMatch) list.push(index);
            return list;
        }, []);
    }
    function get(inView = true) {
        if (inView && inViewCache) return inViewCache;
        if (!inView && notInViewCache) return notInViewCache;
        const slideIndexes = createInViewList(inView);
        if (inView) inViewCache = slideIndexes;
        if (!inView) notInViewCache = slideIndexes;
        return slideIndexes;
    }
    const self = {
        init,
        destroy,
        get
    };
    return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
    const { measureSize, startEdge, endEdge } = axis;
    const withEdgeGap = slideRects[0] && readEdgeGap;
    const startGap = measureStartGap();
    const endGap = measureEndGap();
    const slideSizes = slideRects.map(measureSize);
    const slideSizesWithGaps = measureWithGaps();
    function measureStartGap() {
        if (!withEdgeGap) return 0;
        const slideRect = slideRects[0];
        return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
    }
    function measureEndGap() {
        if (!withEdgeGap) return 0;
        const style = ownerWindow.getComputedStyle(arrayLast(slides));
        return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
    }
    function measureWithGaps() {
        return slideRects.map((rect, index, rects)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(rects, index);
            if (isFirst) return slideSizes[index] + startGap;
            if (isLast) return slideSizes[index] + endGap;
            return rects[index + 1][startEdge] - rect[startEdge];
        }).map(mathAbs);
    }
    const self = {
        slideSizes,
        slideSizesWithGaps,
        startGap,
        endGap
    };
    return self;
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
    const { startEdge, endEdge, direction } = axis;
    const groupByNumber = isNumber(slidesToScroll);
    function byNumber(array, groupSize) {
        return arrayKeys(array).filter((i)=>i % groupSize === 0).map((i)=>array.slice(i, i + groupSize));
    }
    function bySize(array) {
        if (!array.length) return [];
        return arrayKeys(array).reduce((groups, rectB, index)=>{
            const rectA = arrayLast(groups) || 0;
            const isFirst = rectA === 0;
            const isLast = rectB === arrayLastIndex(array);
            const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
            const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
            const gapA = !loop && isFirst ? direction(startGap) : 0;
            const gapB = !loop && isLast ? direction(endGap) : 0;
            const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
            if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
            if (isLast) groups.push(array.length);
            return groups;
        }, []).map((currentSize, index, groups)=>{
            const previousSize = Math.max(groups[index - 1] || 0);
            return array.slice(previousSize, currentSize);
        });
    }
    function groupSlides(array) {
        return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
    }
    const self = {
        groupSlides
    };
    return self;
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
    // Options
    const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
    // Measurements
    const pixelTolerance = 2;
    const nodeRects = NodeRects();
    const containerRect = nodeRects.measure(container);
    const slideRects = slides.map(nodeRects.measure);
    const axis = Axis(scrollAxis, direction);
    const viewSize = axis.measureSize(containerRect);
    const percentOfView = PercentOfView(viewSize);
    const alignment = Alignment(align, viewSize);
    const containSnaps = !loop && !!containScroll;
    const readEdgeGap = loop || !!containScroll;
    const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
    const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
    const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
    const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
    const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
    const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
    const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
    // Indexes
    const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
    const indexPrevious = index.clone();
    const slideIndexes = arrayKeys(slides);
    // Animation
    const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } })=>{
        if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
        scrollBody.seek();
    };
    const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha)=>{
        const shouldSettle = scrollBody.settled();
        const withinBounds = !scrollBounds.shouldConstrain();
        const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
        const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
        if (hasSettledAndIdle) animation.stop();
        const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
        offsetLocation.set(interpolatedLocation);
        if (loop) {
            scrollLooper.loop(scrollBody.direction());
            slideLooper.loop();
        }
        translate.to(offsetLocation.get());
        if (hasSettledAndIdle) eventHandler.emit('settle');
        if (!hasSettled) eventHandler.emit('scroll');
    };
    const animation = Animations(ownerDocument, ownerWindow, ()=>update(engine), (alpha)=>render(engine, alpha));
    // Shared
    const friction = 0.68;
    const startLocation = scrollSnaps[index.get()];
    const location = Vector1D(startLocation);
    const previousLocation = Vector1D(startLocation);
    const offsetLocation = Vector1D(startLocation);
    const target = Vector1D(startLocation);
    const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
    const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
    const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
    const scrollProgress = ScrollProgress(limit);
    const eventStore = EventStore();
    const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
    const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
    const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
    // Engine
    const engine = {
        ownerDocument,
        ownerWindow,
        eventHandler,
        containerRect,
        slideRects,
        animation,
        axis,
        dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
        eventStore,
        percentOfView,
        index,
        indexPrevious,
        limit,
        location,
        offsetLocation,
        previousLocation,
        options,
        resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
        scrollBody,
        scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
        scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
            location,
            offsetLocation,
            previousLocation,
            target
        ]),
        scrollProgress,
        scrollSnapList: scrollSnaps.map(scrollProgress.get),
        scrollSnaps,
        scrollTarget,
        scrollTo,
        slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
        slideFocus,
        slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
        slidesInView,
        slideIndexes,
        slideRegistry,
        slidesToScroll,
        target,
        translate: Translate(axis, container)
    };
    return engine;
}
function EventHandler() {
    let listeners = {};
    let api;
    function init(emblaApi) {
        api = emblaApi;
    }
    function getListeners(evt) {
        return listeners[evt] || [];
    }
    function emit(evt) {
        getListeners(evt).forEach((e)=>e(api, evt));
        return self;
    }
    function on(evt, cb) {
        listeners[evt] = getListeners(evt).concat([
            cb
        ]);
        return self;
    }
    function off(evt, cb) {
        listeners[evt] = getListeners(evt).filter((e)=>e !== cb);
        return self;
    }
    function clear() {
        listeners = {};
    }
    const self = {
        init,
        emit,
        off,
        on,
        clear
    };
    return self;
}
const defaultOptions = {
    align: 'center',
    axis: 'x',
    container: null,
    slides: null,
    containScroll: 'trimSnaps',
    direction: 'ltr',
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: false,
    dragThreshold: 10,
    loop: false,
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
    active: true,
    watchDrag: true,
    watchResize: true,
    watchSlides: true,
    watchFocus: true
};
function OptionsHandler(ownerWindow) {
    function mergeOptions(optionsA, optionsB) {
        return objectsMergeDeep(optionsA, optionsB || {});
    }
    function optionsAtMedia(options) {
        const optionsAtMedia = options.breakpoints || {};
        const matchedMediaOptions = objectKeys(optionsAtMedia).filter((media)=>ownerWindow.matchMedia(media).matches).map((media)=>optionsAtMedia[media]).reduce((a, mediaOption)=>mergeOptions(a, mediaOption), {});
        return mergeOptions(options, matchedMediaOptions);
    }
    function optionsMediaQueries(optionsList) {
        return optionsList.map((options)=>objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries)=>acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
    }
    const self = {
        mergeOptions,
        optionsAtMedia,
        optionsMediaQueries
    };
    return self;
}
function PluginsHandler(optionsHandler) {
    let activePlugins = [];
    function init(emblaApi, plugins) {
        activePlugins = plugins.filter(({ options })=>optionsHandler.optionsAtMedia(options).active !== false);
        activePlugins.forEach((plugin)=>plugin.init(emblaApi, optionsHandler));
        return plugins.reduce((map, plugin)=>Object.assign(map, {
                [plugin.name]: plugin
            }), {});
    }
    function destroy() {
        activePlugins = activePlugins.filter((plugin)=>plugin.destroy());
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function EmblaCarousel(root, userOptions, userPlugins) {
    const ownerDocument = root.ownerDocument;
    const ownerWindow = ownerDocument.defaultView;
    const optionsHandler = OptionsHandler(ownerWindow);
    const pluginsHandler = PluginsHandler(optionsHandler);
    const mediaHandlers = EventStore();
    const eventHandler = EventHandler();
    const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
    const { on, off, emit } = eventHandler;
    const reInit = reActivate;
    let destroyed = false;
    let engine;
    let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
    let options = mergeOptions(optionsBase);
    let pluginList = [];
    let pluginApis;
    let container;
    let slides;
    function storeElements() {
        const { container: userContainer, slides: userSlides } = options;
        const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
        container = customContainer || root.children[0];
        const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
        slides = [].slice.call(customSlides || container.children);
    }
    function createEngine(options) {
        const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
        if (options.loop && !engine.slideLooper.canLoop()) {
            const optionsWithoutLoop = Object.assign({}, options, {
                loop: false
            });
            return createEngine(optionsWithoutLoop);
        }
        return engine;
    }
    function activate(withOptions, withPlugins) {
        if (destroyed) return;
        optionsBase = mergeOptions(optionsBase, withOptions);
        options = optionsAtMedia(optionsBase);
        pluginList = withPlugins || pluginList;
        storeElements();
        engine = createEngine(options);
        optionsMediaQueries([
            optionsBase,
            ...pluginList.map(({ options })=>options)
        ]).forEach((query)=>mediaHandlers.add(query, 'change', reActivate));
        if (!options.active) return;
        engine.translate.to(engine.location.get());
        engine.animation.init();
        engine.slidesInView.init();
        engine.slideFocus.init(self);
        engine.eventHandler.init(self);
        engine.resizeHandler.init(self);
        engine.slidesHandler.init(self);
        if (engine.options.loop) engine.slideLooper.loop();
        if (container.offsetParent && slides.length) engine.dragHandler.init(self);
        pluginApis = pluginsHandler.init(self, pluginList);
    }
    function reActivate(withOptions, withPlugins) {
        const startIndex = selectedScrollSnap();
        deActivate();
        activate(mergeOptions({
            startIndex
        }, withOptions), withPlugins);
        eventHandler.emit('reInit');
    }
    function deActivate() {
        engine.dragHandler.destroy();
        engine.eventStore.clear();
        engine.translate.clear();
        engine.slideLooper.clear();
        engine.resizeHandler.destroy();
        engine.slidesHandler.destroy();
        engine.slidesInView.destroy();
        engine.animation.destroy();
        pluginsHandler.destroy();
        mediaHandlers.clear();
    }
    function destroy() {
        if (destroyed) return;
        destroyed = true;
        mediaHandlers.clear();
        deActivate();
        eventHandler.emit('destroy');
        eventHandler.clear();
    }
    function scrollTo(index, jump, direction) {
        if (!options.active || destroyed) return;
        engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
        engine.scrollTo.index(index, direction || 0);
    }
    function scrollNext(jump) {
        const next = engine.index.add(1).get();
        scrollTo(next, jump, -1);
    }
    function scrollPrev(jump) {
        const prev = engine.index.add(-1).get();
        scrollTo(prev, jump, 1);
    }
    function canScrollNext() {
        const next = engine.index.add(1).get();
        return next !== selectedScrollSnap();
    }
    function canScrollPrev() {
        const prev = engine.index.add(-1).get();
        return prev !== selectedScrollSnap();
    }
    function scrollSnapList() {
        return engine.scrollSnapList;
    }
    function scrollProgress() {
        return engine.scrollProgress.get(engine.offsetLocation.get());
    }
    function selectedScrollSnap() {
        return engine.index.get();
    }
    function previousScrollSnap() {
        return engine.indexPrevious.get();
    }
    function slidesInView() {
        return engine.slidesInView.get();
    }
    function slidesNotInView() {
        return engine.slidesInView.get(false);
    }
    function plugins() {
        return pluginApis;
    }
    function internalEngine() {
        return engine;
    }
    function rootNode() {
        return root;
    }
    function containerNode() {
        return container;
    }
    function slideNodes() {
        return slides;
    }
    const self = {
        canScrollNext,
        canScrollPrev,
        containerNode,
        internalEngine,
        destroy,
        off,
        on,
        emit,
        plugins,
        previousScrollSnap,
        reInit,
        rootNode,
        scrollNext,
        scrollPrev,
        scrollProgress,
        scrollSnapList,
        scrollTo,
        selectedScrollSnap,
        slideNodes,
        slidesInView,
        slidesNotInView
    };
    activate(userOptions, userPlugins);
    setTimeout(()=>eventHandler.emit('init'), 0);
    return self;
}
EmblaCarousel.globalOptions = undefined;
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Factory
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 16h.01",
            key: "1drbdi"
        }
    ],
    [
        "path",
        {
            d: "M16 16h.01",
            key: "1f9h7w"
        }
    ],
    [
        "path",
        {
            d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
            key: "1iv0i2"
        }
    ],
    [
        "path",
        {
            d: "M8 16h.01",
            key: "18s6g9"
        }
    ]
];
const Factory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("factory", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript) <export default as Factory>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Factory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Layers
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }
    ]
];
const Layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("layers", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Shield
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
];
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shield", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/src/app/service/[id]/service-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceContent",
    ()=>ServiceContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript) <export default as Factory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ServiceContent({ id }) {
    _s();
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServiceBySlug"])(id);
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        loop: true
    });
    const [activeMedia, setActiveMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServiceContent.useCallback[scrollPrev]": ()=>{
            if (emblaApi) emblaApi.scrollPrev();
        }
    }["ServiceContent.useCallback[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServiceContent.useCallback[scrollNext]": ()=>{
            if (emblaApi) emblaApi.scrollNext();
        }
    }["ServiceContent.useCallback[scrollNext]"], [
        emblaApi
    ]);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServiceContent.useCallback[scrollTo]": (index)=>{
            if (emblaApi) emblaApi.scrollTo(index);
        }
    }["ServiceContent.useCallback[scrollTo]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceContent.useEffect": ()=>{
            if (!emblaApi) return;
            emblaApi.on("select", {
                "ServiceContent.useEffect": ()=>{
                    setActiveMedia(emblaApi.selectedScrollSnap());
                }
            }["ServiceContent.useEffect"]);
        }
    }["ServiceContent.useEffect"], [
        emblaApi
    ]);
    if (!service) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-6xl font-bold",
                    children: "404"
                }, void 0, false, {
                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-lg text-white/60",
                    children: "We couldn't find that service."
                }, void 0, false, {
                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#services",
                    className: "mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-[1.03] active:scale-[0.97]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        "Back to services"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/service/[id]/service-content.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    // Get related services (excluding the current one)
    const related = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesData"].filter((s)=>s.slug !== service.slug).slice(0, 3);
    const totalSlides = 1 + service.gallery.length;
    const benefitIcons = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-[55vh] sm:h-[70vh] min-h-[380px] sm:min-h-[500px] w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: service.image,
                        alt: service.title,
                        className: "absolute inset-0 h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"
                    }, void 0, false, {
                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-start justify-end px-4 pb-10 sm:px-6 sm:pb-16 md:px-16 lg:px-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#services",
                                    className: "mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10 active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        "All Services"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "max-w-3xl text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg md:text-xl font-medium text-white/70",
                                    children: service.tagline
                                }, void 0, false, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-24 md:px-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    transition: {
                        duration: 0.6,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                "Overview"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight",
                            children: [
                                "What is",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent",
                                    children: [
                                        service.title,
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-5 sm:mt-8 text-sm sm:text-xl leading-relaxed text-white/80",
                            children: service.longDesc
                        }, void 0, false, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden bg-[#050505] px-4 py-14 sm:px-6 sm:py-24 md:px-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: "mb-8 sm:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        "Gallery & Process"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight",
                                    children: "See it in action"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.97
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true,
                                amount: 0.15
                            },
                            transition: {
                                duration: 0.7,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: "flex flex-col gap-3 md:flex-row md:gap-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative flex-1 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-r-none border border-white/10 md:border-r-0 shadow-2xl shadow-black/60 bg-black/50",
                                    style: {
                                        aspectRatio: '16 / 9',
                                        minHeight: '220px',
                                        maxHeight: '520px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden h-full w-full",
                                            ref: emblaRef,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full w-full touch-pan-y",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-full min-w-0 shrink-0 grow-0 basis-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                            src: service.video,
                                                            autoPlay: true,
                                                            loop: true,
                                                            muted: true,
                                                            playsInline: true,
                                                            onCanPlay: (e)=>{
                                                                const video = e.target;
                                                                video.play().catch(console.error);
                                                            },
                                                            className: "h-full w-full object-cover",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "p-8 text-center text-white/50",
                                                                children: [
                                                                    "Video of the ",
                                                                    service.title.toLowerCase(),
                                                                    " process will appear here."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, service.video, false, {
                                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    service.gallery.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-full min-w-0 shrink-0 grow-0 basis-full flex items-center justify-center bg-black/80",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: img,
                                                                alt: `${service.title} example ${i + 1}`,
                                                                className: "h-full w-full object-contain p-2 sm:p-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, img + i, false, {
                                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: scrollPrev,
                                            className: "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95 sm:opacity-0 sm:group-hover:opacity-100 border border-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "h-4 w-4 sm:h-6 sm:w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: scrollNext,
                                            className: "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95 sm:opacity-0 sm:group-hover:opacity-100 border border-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-4 w-4 sm:h-6 sm:w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex md:flex-col gap-1.5 sm:gap-2 md:gap-0 overflow-x-auto md:overflow-x-visible md:w-28 md:self-stretch rounded-xl sm:rounded-2xl md:rounded-l-none md:rounded-r-3xl border border-white/10 md:border-l-0 bg-white/[0.02] backdrop-blur-xl",
                                    style: {
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollTo(0),
                                            className: `relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 md:w-full md:h-auto md:flex-1 md:min-h-0 overflow-hidden transition-all duration-300 ${activeMedia === 0 ? "bg-white/10 ring-2 ring-white/30 md:ring-0" : "bg-transparent opacity-60 hover:opacity-100 hover:bg-white/[0.04]"}`,
                                            children: [
                                                activeMedia === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    layoutId: "activeThumb",
                                                    className: "absolute inset-0 border-2 border-white/30 pointer-events-none hidden md:block",
                                                    style: {
                                                        borderRadius: 0
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 350,
                                                        damping: 30
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center bg-black/70",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-4 w-4 sm:h-5 sm:w-5 text-white/80",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M8 5v14l11-7z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 149
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/60",
                                                                children: "Video"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        service.gallery.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollTo(i + 1),
                                                className: `relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 md:w-full md:h-auto md:flex-1 md:min-h-0 overflow-hidden transition-all duration-300 md:border-t md:border-white/[0.06] ${activeMedia === i + 1 ? "bg-white/10 ring-2 ring-white/30 md:ring-0" : "bg-transparent opacity-60 hover:opacity-100 hover:bg-white/[0.04]"}`,
                                                children: [
                                                    activeMedia === i + 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        layoutId: "activeThumb",
                                                        className: "absolute inset-0 border-2 border-white/30 pointer-events-none hidden md:block",
                                                        style: {
                                                            borderRadius: 0
                                                        },
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 350,
                                                            damping: 30
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: img,
                                                        alt: `Thumbnail ${i + 1}`,
                                                        className: "h-full w-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, img + i, true, {
                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-1.5 mt-4 md:hidden",
                            children: Array.from({
                                length: totalSlides
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollTo(i),
                                    className: `rounded-full transition-all duration-300 ${activeMedia === i ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"}`,
                                    "aria-label": `Go to slide ${i + 1}`
                                }, i, false, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#050505] px-4 py-14 sm:px-6 sm:py-24 md:px-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: "mb-8 sm:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this),
                                        "Why Choose This"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight",
                                    children: "Key advantages"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:gap-6 sm:grid-cols-2",
                            children: service.benefits.map((b, i)=>{
                                const Icon = benefitIcons[i % benefitIcons.length];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 24
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.2
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: i * 0.08,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: "group flex items-start gap-4 sm:flex-col rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] active:scale-[0.98]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 sm:mb-2 items-center justify-center rounded-xl sm:rounded-2xl bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-5 w-5 sm:h-6 sm:w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                lineNumber: 311,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-2xl font-bold text-white",
                                                    children: b.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1.5 sm:mt-3 text-xs sm:text-base leading-relaxed text-white/80",
                                                    children: b.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, b.title, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 298,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#050505] px-4 py-14 sm:px-6 sm:py-24 md:px-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: "mb-8 sm:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        "Industries"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight",
                                    children: "Typical applications"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2.5 sm:gap-4 sm:grid-cols-2",
                            children: service.applications.map((app, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -14
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.35,
                                        delay: i * 0.05,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: "flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 sm:px-6 sm:py-4 transition-all hover:border-white/15 active:scale-[0.98]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm sm:text-base font-medium text-white/90",
                                            children: app
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, app, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-24 md:px-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "mb-8 sm:mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this),
                                    "Explore More"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight",
                                children: "Other services we offer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3",
                        children: related.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 24
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    amount: 0.15
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: i * 0.08,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/service/${s.slug}`,
                                    className: "group block overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] active:scale-[0.98]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[16/9] overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: s.image,
                                                    alt: s.title,
                                                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm sm:text-base font-semibold text-white",
                                                            children: s.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-white/50",
                                                            children: s.tagline
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this)
                            }, s.slug, false, {
                                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/service/[id]/service-content.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/service/[id]/service-content.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this)
        ]
    }, id, true, {
        fileName: "[project]/src/app/service/[id]/service-content.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(ServiceContent, "YQWiphrBfCC1tp4ce9HBjr3vbAw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ServiceContent;
var _c;
__turbopack_context__.k.register(_c, "ServiceContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].footer, {
        initial: {
            opacity: 0,
            y: 16
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.3
        },
        transition: {
            duration: 0.5
        },
        className: "border-t border-white/10 bg-black px-4 py-12 sm:px-6 sm:py-16 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 sm:mb-8 text-center text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-white/40",
                    children: "DELIVERING EXCELLENCE IN"
                }, void 0, false, {
                    fileName: "[project]/src/components/site/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-12 opacity-60",
                    children: [
                        "PRECISION",
                        "QUALITY",
                        "RELIABILITY",
                        "DURABILITY",
                        "CONSISTENCY"
                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs sm:text-sm font-bold tracking-widest text-white/70",
                            children: p
                        }, p, false, {
                            fileName: "[project]/src/components/site/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/site/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 sm:mt-14 flex flex-col items-center gap-1.5 text-[11px] sm:text-xs text-white/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Aditya Enterprises"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/Footer.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Pune, Maharashtra · ISO 9001:2015 certified"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/Footer.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site/Footer.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site/Footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/services-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "servicesData",
    ()=>servicesData
]);
const anodising = "/assets/service-anodising.jpg";
const brightdip = "/assets/service-brightdip.jpg";
const hardanodising = "/assets/service-hardanodising.jpg";
const chromating = "/assets/service-chromating.jpg";
const blasting = "/assets/service-blasting.jpg";
const servicesData = [
    {
        slug: "anodising",
        title: "Aluminium Anodising Coating",
        tagline: "The gold standard of aluminium surface protection",
        shortDesc: "Type II sulfuric anodizing — decorative and corrosion protection from 8–25 microns.",
        longDesc: "Anodising is an electrochemical process that converts the aluminium surface into a durable, corrosion-resistant oxide finish. Unlike paint or plating, the coating becomes part of the metal itself, so it will never peel, chip or flake. The result is a uniform, hard surface that resists scratches, UV degradation and chemical attack — making your components last decades longer in demanding environments.",
        image: anodising,
        video: "/videos/anodising.mp4",
        gallery: [
            "/gallery/anodising_1.png",
            "/gallery/anodising_2.png",
            "/gallery/anodising_3.png",
            "/gallery/anodising_4.png"
        ],
        processSteps: [
            {
                step: "Cleaning & Degreasing",
                detail: "Parts are chemically cleaned to remove oils, dirt and surface contaminants."
            },
            {
                step: "Etching",
                detail: "A controlled alkaline etch creates a uniform, matte base surface."
            },
            {
                step: "Anodising Bath",
                detail: "Parts are submerged in a sulfuric acid electrolyte and a controlled electrical current grows the oxide layer."
            },
            {
                step: "Colouring (Optional)",
                detail: "Electrolytic or dip dyeing infuses colour into the porous oxide layer before sealing."
            },
            {
                step: "Sealing",
                detail: "Hot water or nickel acetate sealing locks in the finish for maximum durability."
            }
        ],
        benefits: [
            {
                title: "Corrosion Resistance",
                desc: "The anodic layer acts as a permanent barrier against moisture, salt spray and chemicals."
            },
            {
                title: "Scratch Hardness",
                desc: "Hardness up to 300 HV — significantly tougher than raw aluminium."
            },
            {
                title: "Colour Stability",
                desc: "Dyed finishes resist UV fading for years, even in outdoor installations."
            },
            {
                title: "Eco-Friendly",
                desc: "No heavy metals or VOCs — the process is fully RoHS and REACH compliant."
            }
        ],
        applications: [
            "Architectural facades & curtain walls",
            "Automotive trim & interior parts",
            "Consumer electronics enclosures",
            "Furniture & interior design fittings",
            "Electrical switchgear housings"
        ],
        specs: [
            {
                label: "Coating Thickness",
                value: "8 – 25 microns"
            },
            {
                label: "Hardness",
                value: "250 – 300 HV"
            },
            {
                label: "Colour Options",
                value: "Clear, black, bronze, gold, custom"
            },
            {
                label: "Standard",
                value: "IS 1868 / MIL-A-8625 Type II"
            }
        ]
    },
    {
        slug: "brightdip",
        title: "Bright Dip Anodizing",
        tagline: "Mirror-bright, chrome-like brilliance without chrome",
        shortDesc: "Chemical polishing followed by anodizing for a mirror-bright, chrome-like finish.",
        longDesc: "Bright dip anodizing combines a chemical brightening step with conventional anodizing to produce a highly reflective, mirror-like finish on aluminium. The process smooths microscopic surface irregularities, giving your parts a premium chrome-like lustre that catches the eye instantly. Unlike chrome plating, bright dip anodizing is environmentally safer, lighter in weight and bonds permanently to the aluminium substrate.",
        image: brightdip,
        video: "/videos/brightdip-texture.mp4",
        gallery: [
            "/gallery/brightdip_1.png",
            "/gallery/brightdip_2.png",
            "/gallery/brightdip_3.png",
            "/gallery/brightdip_4.png"
        ],
        processSteps: [
            {
                step: "Pre-cleaning",
                detail: "Thorough degreasing removes all surface contaminants for an even finish."
            },
            {
                step: "Chemical Brightening",
                detail: "A phosphoric-nitric acid bath dissolves micro-peaks on the surface, creating optical-level smoothness."
            },
            {
                step: "Anodising",
                detail: "Sulfuric acid anodizing builds a transparent protective oxide layer over the polished surface."
            },
            {
                step: "Sealing",
                detail: "The porous oxide is sealed to lock in the mirror finish permanently."
            }
        ],
        benefits: [
            {
                title: "Mirror Finish",
                desc: "Achieves up to 85% specular reflectance — rivalling polished chrome."
            },
            {
                title: "Lightweight",
                desc: "No added weight from plating layers — ideal for weight-sensitive applications."
            },
            {
                title: "Permanent Bond",
                desc: "The finish is part of the metal itself — it cannot peel or delaminate."
            },
            {
                title: "Corrosion Protected",
                desc: "The anodic layer underneath the bright surface guards against environmental attack."
            }
        ],
        applications: [
            "Premium consumer electronics",
            "Automotive decorative trim",
            "Reflectors & lighting components",
            "High-end furniture hardware",
            "Jewellery & luxury accessories"
        ],
        specs: [
            {
                label: "Reflectance",
                value: "Up to 85% specular"
            },
            {
                label: "Coating Thickness",
                value: "10 – 20 microns"
            },
            {
                label: "Surface Finish",
                value: "Ra < 0.2 µm"
            },
            {
                label: "Standard",
                value: "IS 1868 / MIL-A-8625 Type II"
            }
        ]
    },
    {
        slug: "hardanodising",
        title: "Aluminium Hard Anodising",
        tagline: "Engineered for extreme wear and heavy-duty performance",
        shortDesc: "Type III thick-film coating up to 60 microns for wear-critical, high-load parts.",
        longDesc: "Hard anodising (Type III) produces an exceptionally thick, dense oxide layer that transforms aluminium into a surface almost as hard as tool steel. This process is specifically designed for components that face extreme mechanical wear, high temperatures and aggressive chemical environments. If your parts need to survive heavy-duty industrial use without failure, hard anodising is the answer.",
        image: hardanodising,
        video: "/videos/hardanodising.mp4",
        gallery: [
            "/gallery/hardanodising_1.png",
            "/gallery/hardanodising_2.png",
            "/gallery/hardanodising_3.png",
            "/gallery/hardanodising_4.png"
        ],
        processSteps: [
            {
                step: "Precision Cleaning",
                detail: "Multi-stage cleaning ensures absolute surface purity for uniform coating growth."
            },
            {
                step: "Low-Temperature Anodising",
                detail: "Parts are anodised in chilled sulfuric acid at near-zero temperatures for maximum density."
            },
            {
                step: "Controlled Current Ramping",
                detail: "Current is gradually increased to build thickness without cracking or burning."
            },
            {
                step: "Post-Treatment",
                detail: "Optional PTFE impregnation or sealing to add lubricity or corrosion resistance."
            }
        ],
        benefits: [
            {
                title: "Extreme Hardness",
                desc: "Up to 70 HRC equivalent — approaching the hardness of industrial ceramics."
            },
            {
                title: "Wear Resistance",
                desc: "Withstands thousands of hours of abrasive contact without degradation."
            },
            {
                title: "Thermal Insulation",
                desc: "The thick oxide layer acts as an effective thermal barrier up to 2000°C flash."
            },
            {
                title: "Dielectric Strength",
                desc: "Excellent electrical insulation properties for high-voltage components."
            }
        ],
        applications: [
            "Hydraulic cylinders & pneumatic pistons",
            "Textile machinery rollers",
            "Defence & aerospace components",
            "Pump housings & valve bodies",
            "Injection mould tooling"
        ],
        specs: [
            {
                label: "Coating Thickness",
                value: "25 – 60 microns"
            },
            {
                label: "Hardness",
                value: "400 – 600 HV (60–70 HRC)"
            },
            {
                label: "Wear Rate",
                value: "< 3.5 mg / 1000 cycles (Taber)"
            },
            {
                label: "Standard",
                value: "MIL-A-8625 Type III"
            }
        ]
    },
    {
        slug: "chromating",
        title: "Aluminium Chromating",
        tagline: "The essential pre-treatment for paint adhesion and protection",
        shortDesc: "Alodine / conversion coating for paint adhesion and light corrosion resistance.",
        longDesc: "Chromating (also known as chemical conversion coating or Alodine treatment) creates a thin, protective chromate film on aluminium surfaces. This process is widely used as a pre-treatment before painting or powder coating because it dramatically improves paint adhesion and provides a baseline layer of corrosion resistance. It is also used as a standalone finish where lightweight protection is sufficient.",
        image: chromating,
        video: "/videos/chromating-texture.mp4",
        gallery: [
            "/gallery/chromating_1.png",
            "/gallery/chromating_2.png",
            "/gallery/chromating_3.png",
            "/gallery/chromating_4.png"
        ],
        processSteps: [
            {
                step: "Alkaline Cleaning",
                detail: "Removes oils and oxides to expose a chemically active aluminium surface."
            },
            {
                step: "De-oxidising",
                detail: "Acid-based de-oxidiser removes the natural oxide layer for uniform coating."
            },
            {
                step: "Chromate Immersion",
                detail: "Parts are dipped into a chromate solution which reacts with the aluminium to form a protective film."
            },
            {
                step: "Rinse & Dry",
                detail: "Careful rinsing and controlled drying preserves the conversion coating integrity."
            }
        ],
        benefits: [
            {
                title: "Paint Adhesion",
                desc: "Increases paint bond strength by up to 400% compared to bare aluminium."
            },
            {
                title: "Corrosion Baseline",
                desc: "Provides 168+ hours of salt spray resistance even without paint."
            },
            {
                title: "Conductive",
                desc: "Unlike anodising, the chromate layer maintains electrical conductivity."
            },
            {
                title: "Fast Turnaround",
                desc: "Simple immersion process with rapid cycle times for high-volume orders."
            }
        ],
        applications: [
            "Pre-treatment before powder coating",
            "Aerospace structural components",
            "Electrical grounding surfaces",
            "Military hardware & defence enclosures",
            "Automotive body-in-white parts"
        ],
        specs: [
            {
                label: "Film Thickness",
                value: "0.5 – 4 microns"
            },
            {
                label: "Salt Spray (Standalone)",
                value: "168+ hours"
            },
            {
                label: "Colour",
                value: "Clear to iridescent gold"
            },
            {
                label: "Standard",
                value: "MIL-DTL-5541 / IS 1868"
            }
        ]
    },
    {
        slug: "blasting",
        title: "Glass Bead Blasting",
        tagline: "Consistent matte texture for flawless finishing",
        shortDesc: "Uniform matte pre-treatment for consistent anodizing appearance and grip.",
        longDesc: "Glass bead blasting propels fine spherical glass media at high velocity against aluminium surfaces to create a smooth, uniform matte texture. Unlike angular abrasives, glass beads do not cut or damage the surface — they gently peen it, producing a satin finish that hides machining marks, tool lines and minor surface imperfections. This makes it the ideal pre-treatment before anodizing when you need a perfectly even, professional appearance.",
        image: blasting,
        video: "/videos/glass-bead-blasting.mp4",
        gallery: [
            "/gallery/blasting_1.png",
            "/gallery/blasting_2.png",
            "/gallery/blasting_3.png",
            "/gallery/blasting_4.png"
        ],
        processSteps: [
            {
                step: "Part Fixturing",
                detail: "Components are securely mounted to ensure consistent blast angle and coverage."
            },
            {
                step: "Media Selection",
                detail: "Glass bead size is chosen based on the required surface finish and part geometry."
            },
            {
                step: "Blasting",
                detail: "Pressurised air propels glass beads uniformly across the entire surface area."
            },
            {
                step: "Inspection",
                detail: "Surface roughness is measured to confirm the target Ra value before proceeding to anodizing."
            }
        ],
        benefits: [
            {
                title: "Uniform Texture",
                desc: "Creates a perfectly even matte surface — no streaks, hot spots or pattern marks."
            },
            {
                title: "Hides Imperfections",
                desc: "Eliminates visible machining lines, minor scratches and tool marks."
            },
            {
                title: "Non-Destructive",
                desc: "Spherical glass beads compress the surface without removing material or altering dimensions."
            },
            {
                title: "Better Anodizing",
                desc: "The uniform surface ensures consistent dye uptake and colour matching across batches."
            }
        ],
        applications: [
            "Pre-anodizing surface preparation",
            "Medical device housings",
            "Food processing equipment",
            "Decorative architectural panels",
            "Precision machined components"
        ],
        specs: [
            {
                label: "Media",
                value: "Glass beads (40–200 mesh)"
            },
            {
                label: "Finish",
                value: "Ra 0.8 – 3.2 µm (adjustable)"
            },
            {
                label: "Pressure",
                value: "2 – 6 bar"
            },
            {
                label: "Dimensional Impact",
                value: "Negligible (< 0.01 mm)"
            }
        ]
    }
];
function getServiceBySlug(slug) {
    return servicesData.find((s)=>s.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0nswgim._.js.map