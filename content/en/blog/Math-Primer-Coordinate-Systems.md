---
title: "Mathematics Primer for 3D Software Developer (Coordinate Systems)"
date: 2019-04-12T14:51:12+06:00
type: "blog"
tags: ["3D", "Mathematics", "Development"]
image: images/blog/CoordinateSystems.png
description : "Mathematics Primer for 3D Software Developer (Coordinate Systems)"
---
This article assumes you have a minimum understanding vectors, and matrices.  I will simply show applications of vectors and matrices and how they apply to game programming.

In this article, I would like to provide a brief math primer for people who would like to get involved in game programming.  This is not an exhaustive explanation of all the math theory that one will have to know in order to be a successful game programmer, but it’s the very minimum amount of information that is necessary to know before you can begin as a game programmer.

#### Coordinate Systems
Before we can talk about transformations, we must make a formal definition of what our coordinate system is.  The default coordinate system used by DirectX is a left-handed coordinate system. The default coordinate system used by OpenGL is a right-handed coordinate system.

The easiest way to remember what coordinate system you are using is to use your hands.  If you point your thumb, your index finger, and your middle finger orthogonal to each other, then each finger will point in the direction of a positive cardinal axis in your coordinate space.  Using your left hand, your thumb points to the right (the $+𝑋$ axis), your index finger points up (the +𝑌 axis), and your middle finger points away from you (the $+𝑍$ axis).

Using your right-hand, your thumb (the $+𝑋$ axis) and your index finger (the $+𝑌$ axis) still point in the same direction, but the middle finger (the $+𝑍$ axis) points in the opposite direction.  If we rotated our hand around the index finger (the $+𝑌$ axis) in order to get your thumb to point to the right, then your middle finger (the $+𝑍$ axis) would be pointing towards you.

Another important note to remember is the direction of rotation.  If you point your thumb in the positive direction of the axis of rotation and curl your fingers around that imaginary axis, your fingers will curl in the positive direction of rotation.  If you do this on your left hand your fingers will curl in a clockwise direction when looking down at your thumb.  However if you do this on your right hand, your fingers will curl in a counter-clockwise direction when looking down at your thumb.

