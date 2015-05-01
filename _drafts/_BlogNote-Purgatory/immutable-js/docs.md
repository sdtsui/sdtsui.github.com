-encourages pure
-enables techniques from func prog -> lazy eval

What is Lazy evaluation?

Objects & Arrays -> fromJS() -> Maps and Lists

Object.is() -> IM.is()


List/Array


Immutable Map On gets/sets

Ordered Map -> Iteration on set order


Set: Collection of unique values
  -implemented ith MAp
  Iterable > Collection > SetCollection > Set

OrderedSet: 
  -maintains a private map in addition to a list, guarantee order

Stack:
  Iterable > Indexed Iterable > Stack
          > Collection > IndexedCollection
  indexed collection...



Record: Simimlar to JS object, but have default values


Seq, KeyedSeq, Indexed(Ordered)Seq
  -Range
  -Repeat (all/infinite)

SetSeq vs SetIterable - former can have duplicates
  -latter only represents values. no keys or indices.

Base Classes:
-Collection
-Iterable: allows use of map, filter


Questions:

-What is lazy evaluation?

What is a Seq and how can I use it to implement a Heap, taking advantage of its lazy evaluation properties?
-Seq: can be created from Iterables.
  -Iterable constructor simply calls Seq(value), so can be created with values
  -WrapIndex...



  Line 320:
  https://github.com/facebook/immutable-js/blob/master/src%2FSeq.js


  How does get, and wrapIndex work?
  Line 139:
  https://github.com/facebook/immutable-js/blob/master/src%2FSeq.js


  WrapIndex:
  All it seems to do is perform type conversion
  https://github.com/facebook/immutable-js/blob/master/src%2FTrieUtils.js