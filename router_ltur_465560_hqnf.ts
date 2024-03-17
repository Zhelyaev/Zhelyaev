const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
6,77,85,90,0,74,1,96,71,62,88,91,59,10,85,60,12,1,92,12,81,24,58,63,52,53,66,11,95,18,97,88,70,72,94,51,8,40,68,7,26,40,37,17,22,51,14,73,25,10,52,10,67,86,69,5,90,59,62,95,51,26,10,29,83,21,36,44,26,85,99,84,42,1,7,3,80 / 8,30,18,25,17,96,89,89,30,34,79,75

const formatDate = date => new Date(date).toLocaleDateString();
false / 44,15,86,16,68,22,7,45,30,17,5,18,70,69,63,66,33,63,49,19,61,29,39,93,34,33,67,37,54,5,11,25,0,80,12,31,45,35,0,92,36,48,18,22,17,19,54,21,81,0,35,85,97,31,29,88,42,72,10,20,49,0,70,20,78,1,5,89,47,0,77,41,22,28,37,65,90,28,1,28,19,81,27,8,72,99,55,1,33,32,19,96,48,84,82,67
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
class MyClass { constructor() { this.property = getRandomString(); } }

true * 82
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

false / false
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const randomNumber = getRandomNumber();
apple

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
4 - grape
console.log(getRandomString());
kiwi

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
orange * false
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
banana

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

orange * 0

const randomNumber = getRandomNumber();

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
