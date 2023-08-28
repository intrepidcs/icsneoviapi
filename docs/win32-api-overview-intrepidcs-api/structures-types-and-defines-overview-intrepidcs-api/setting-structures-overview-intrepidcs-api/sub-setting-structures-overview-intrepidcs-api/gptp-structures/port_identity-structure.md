---
sidebar_position: 4
id: port_identity-structure
---

# port_identity Structure

This structure defines port\_Identity for gPTP

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct __declspec (align(1))
{
   uint64_t clock_identity;
   uint16_t port_number;
}port_identity; 
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=1)> Public Structure port_identity
   Dim clock_identity As UInt64
   Dim port_number As UInt16
End Structure [StructLayout(LayoutKind.Sequential,Pack=1)]
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=1)]
public struct port_identity
{
   public UInt64 clock_identity;
   public UInt16 port_number;
}
```
</TabItem>
</Tabs>

**Remarks**

| Item            | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| clock\_identity | clockIdentity attribute is defined in 7.5.2.2 of IEEE Std 1588-2019 |
| port\_number    | portNumber represents the PTP ports on the network.                 |
