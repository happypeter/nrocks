---
id: 3-dev
title: 智能合约入门
permalink: nerv-first/3-dev.html
prev: 2-nervos.html
next: 4-sol.html
---

智能合约也称为”自执行和约“，或者叫“代码化的合约”。这个小节里面我们不聊智能合约的社会意义，而是假设你是一位开发者，准备上手智能合约的开发，那么动手之前都有哪些基础知识是必备的呢？本文为你呈现。

## 智能合约和区块链

智能合约的概念于 1994 年由 Nick Szabo 首次提出。广义上来讲，任何的能自动完成的合同就是一个智能合约，例如我去自动售货机买一瓶饮料，或者扫码使用一辆共享单车。但是当前讨论的智能合约，其实是跟区块链密不可分的。所以我们这里讨论的智能合约的精确的定义是，一个运行在区块链上的程序。注意这个程序甚至不一定需要去模拟一个商业合约，任何的一段程序只要是部署到了区块链上，我们都叫它一个智能合约，即使程序中只是完成了打印 Hello World ，或者计数器加一的操作。

为何智能合约和区块链结合如此紧密呢？Szabo 提出智能合约的概念之后很长时间内，智能合约根本无法落地，主要原因是合约各方无法去达成信任。于是，区块链作为所谓的信任机器，就刚好成为了智能合约的技术基础。智能合约和传统计算机程序最大的区别在于其执行结果的认可度，传统计算机程序的执行结果没有建立在共识机制上。而达成共识的前提是，合约的执行过程应该是公开的，合约产生的各项数据应该是不可篡改的。

比特币作为区块链之母，没有真正成为智能合约的运行平台。原因就是比特币脚本是图灵不完备的，不能实现丰富的逻辑，所以直接在比特币上运行复杂的智能合约是不现实的。最终，是以太坊的出现带来了智能合约的爆发。

## 用 Solidity 编写智能合约

虽然，以太坊之后的各个区块链项目大都支持智能合约了，包括比特币也在第二层有了 RSK 方案去支持智能合约。但是以太坊技术在智能合约方面的很多开创性的成果，目前已经被大家都默认为是行业标准了。

以太坊之所以能带来智能合约的革命，原因就是它在区块链之上成功运行起了图灵完备的语言，使得描述复杂的业务逻辑成为了可能。Solidity 是诞生在以太坊社区的专门用来写智能合约的新型编程语言。虽然理论上智能合约能用各种语言进行编写，但是目前 Solidity 是编写智能合约的最流行的语言，不仅仅可以在以太坊上可以使用， Nervos AppChain 上也可以使用 Solidity 进行智能合约的开发。

比特币因为功能少，所以可以基本上看做一个运行在区块链上的数据库，因为主要的功能就是存交易数据。而以太坊不一样，可以认为是一个运行在区块链上的虚拟机。以太坊区块链上的虚拟机叫做 EVM ，EVM 就是 Solidity 语言的运行环境。以太坊号称世界计算机，所有的部署到以太坊之上的合约代码，网络上所有的计算机都会各自运算一遍，这样就保证了计算过程是公开可信的。

但是退一步思考一下，为何比特币脚本不设计成图灵完备的呢？是中本聪没有考虑智能合约吗？不是的。中本聪的考虑是这样的，因为区块链是一个公有的环境，如果允许用户写循环语句，那么攻击者写一个死循环，就可以让整个网络瘫痪。而这个担忧显然也适用于以太坊，那以太坊是如何避免这个问题的呢？以太坊之上，每次执行代码是要花费少量的代币的，也就是要花费 Gas ，也就是汽油的意思。这个意义很明确，就是你想让以太坊这辆车跑得快，就要给他加汽油，如果你写一个死循环，那么很快你账户上的汽油就用光了，那么代码也就停止运行，避免了网络的瘫痪。

总之，学习任何平台上的智能合约开发，都避免不了要学习一下以太坊的各种思想和标准，其中比较重要的就是 Solidity 语言，以及消耗 Gas 来租用系统资源的这种思路。

## 编译和执行

那咱们用 Solidity 实现了智能合约之后，如何编译和执行呢？

代码写好之后，需要先编译，然后部署到区块链网络上运行一下。各大区块链项目，基本上都有自己的测试链，测试链上部署和执行代码都不用真的花钱，只需要申请一些测试链代币就可以了。而测试链的运行效果是跟主网没有太大区别的。这里需要注意的是，代码部署到区块链上之后，我们就可以和智能合约进行交互了。但是能够访问的接口不再是我们熟悉的 HTTP API 了，而是叫 ABI ，也就是“应用二进制接口”，所以交互方式也有一定区别。好在这个咱们开发者完全不用担心，各个平台都发布了相应的库来支持交互。比如我们用来跟智能合约交互的前端是一个 Web App ，这样就可以导入对应的 JS 版本的库来实现交互了，以太坊下有 Web3.js ，Nervos 下有 nervos.js 都是为这个目的而生的。如果用 Androd 原生应用来做前端，也有对应的 Java 版本的库可以用。

所以整个的画面是这样的，智能合约的编译后，部署到区块链上，成为运行在链上的实例。然后就可以通过前端 App 来通过 Web3.js 或者 nervos.js 这样的库，来调用合约的各项功能，进行各种读写操作了。合约加上前端 App ，就构成了一个 DApp 。

## 总结

本节是为开发者而写的入门智能合约开发的一些基础知识。我们聊了，区块链因为能够保证代码执行和数据的不可篡改，成为了智能合约必备的技术基础。以太坊因为能够运行图灵完毕的 Solidity 语言，于是带来了智能合约的真正的爆发。最后聊了一下，合约部署到区块链上之后，可以通过 Web3.js 这样的库，来完成前端 App 和后端的合约之间的交互。当然，关于智能合约还有很多其他重要的知识点，但是这些知识，在结合实际平台的动手操作中去学习效果更好，所以我们这里就不展开了。
