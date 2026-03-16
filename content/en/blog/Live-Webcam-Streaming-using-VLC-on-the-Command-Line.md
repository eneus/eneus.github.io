---
title: "Live Webcam Streaming using VLC on the Command Line"
date: 2019-06-02
type: "blog"
tags: ["video", "streaming", "Development"]
image: images/blog/live-stream-tools-blog.jpg
description : "Live Webcam Streaming using VLC on the Command Line"
---

The following are notes on using VLC as both server and server to stream a webcam from a ender across a LAN to multiple receivers. It focusses only on internal LAN streaming, using RTSP, UDP and RTP as the streaming solutions, and working via the command line in Linux. VLC offers other form of streaming (e.g. HTTP, which are covered in some of my older notes) and the GUI is quite good for selecting streaming options.

**Network and Computer Configuration**\
All commands were tested on PCs with Intel i5-4590 CPUs, 16GB of RAM and solid state drives. They were running Ubuntu 14.04 LTS and used VLC 2.1.4. The webcams were Logitech C170 and identified as /dev/video0 by the operating system (if you have two or more webcams then it may appear as a different device). Some tests involved client/server connected to the same switch using 1Gb/s links/switch, while others involved a hierarchy of switches (i.e. client - switch - switch - switch - server) and were limited to 100 Mb/s to the central switch. All tests involve client and server on the same LAN.

I was only interested in video, so audio was disabled in all cases. I use the -vvv to produce extra verbose output; you can safely remove it once you have the command that works for you. I use cvlc on the server (I do not display the video and so no GUI) and vlc on the receiver.

For the following commands the server (i.e. the computer with the webcam that we want to view) has IP address 10.10.16.201 and the receivers are 10.10.16.2xx, where xx is some number other than 01.

**Unicast Streaming with RTSP for Control and RTP for Data**

Start the server/sender:
```shell
cvlc -vvv v4l2:///dev/video0 --sout '#transcode{vcodec=mp2v,vb=800,acodec=none}:rtp{sdp=rtsp://:8554/}'
```

- v4l2:// - Video4Linux is the interface to webcams on Linux
- /dev/video0 - device number assigned to webcam by Linux
- vcodec=mp2v - MP2 video codec
- vb=800 - 800 kb/s video bit rate
- acodec=none - no audio codec
- sdp=rtsp://:8554/ - URL/port advertised by RTSP

Examples of other options you may set include:

- height=320,width=240 after the video bit rate option to specify the video resolution

Start the client/receiver:

```shell
vlc -vvv --network-caching 200 rtsp://10.10.16.201:8554/
```

- --network-caching 200 - the buffer size at the receiver in milliseconds. Default is 1000 ms. A larger buffer will generally give smoother video, but result in an increased delay between sender and receiver.
- rtsp://10.10.16.201:8554/ - URL of the server/sender.

Multiple receivers can receive the same stream (although it is only using multiple unicast streams - see the next section for true multicast). Just start the receiver on other computer in the same way as above.

**Unicast Streaming with UDP for Data (no Control)**

Start the server/sender:

```shell
cvlc v4l2:///dev/video0 --live-caching=10 --sout '#transcode{vcodec=mp2v,vb=256,acodec=ne}:std{access=udp{caching=10},mux=raw,dst=10.10.16.202:1234}'
```

- -v4l2:// - Video4Linux is the interface to webcams on Linux
- /dev/video0 - device number assigned to webcam by Linux
- live-caching - caching used by webcam, in milliseconds
- vcodec=mp2v - MP2 video codec
- vb=200 - 256 kb/s video bit rate
- acodec=none - no audio codec
- dst=10.10.16.202:1234 - IP/port of computer you want to send to

Start the client/receiver:

```shell
vlc --network-caching 200 udp://@:1234
```
**Multicast Streaming with RTP for Data (No Control)**

Start the server/sender:

```shell
cvlc -vvv v4l2:///dev/video0 --sout '#transcode{vcodec=mp2v,vb=800,acodec=none}:rtp{dst=239.0.0.1,port=5004,mux=ts}'
```

Similar options as when using RTSP, with the following additions:

- dst=239.0.0.1 - a local multicast address that receivers will subscribe to
- port=5004 - port for receivers to connect to
- mux=ts - use MPEG Transport Stream for packetizing the video

Start the client/receiver:

```shell
vlc -vvv --network-caching 200 rtp://239.0.0.1:5004/
```

Similar to RTSP, adjust network caching to produce an acceptable trade-off of delay and smoothness.

Multiple computers can view the same stream by running the above client command. This uses multicast across the LAN. Assuming the switch supports multicast, for N receivers, a single packet will be sent from server to switch, and then the switch will send a copy of that packet to each of the subscribed receivers.

[Source](https://sandilands.info/sgordon/live-webca-streaming-using-vlc-command-line)