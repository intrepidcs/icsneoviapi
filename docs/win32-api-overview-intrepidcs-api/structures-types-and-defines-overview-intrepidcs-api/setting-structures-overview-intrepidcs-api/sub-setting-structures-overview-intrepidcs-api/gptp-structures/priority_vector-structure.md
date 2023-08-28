---
sidebar_position: 3
id: priority_vector-structure
---

# priority_vector Structure

This structure defines settings for the priority\_Vector structure for gPTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct __declspec (align(1))
{
   system_identity sysid;
   uint16_t steps_removed;
   port_identity portid;
   uint16_t port_number;
}priority_vector; 
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=1)> Public Structure priority_vector
   Dim sysid As system_identity
   Dim steps_removed As UInt16
   Dim portid As port_identity
   Dim port_number As UInt16
End Structure 
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=1)]
public struct priority_vector
{
   public system_identity sysid;
   public UInt16 steps_removed;
   public port_identity portid;
   public UInt16 port_number;
}

```
</TabItem>
</Tabs>

**Remarks**

| Item           | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| sysid          | See system\_identity structure                                    |
| steps\_removed | Indicates the number of Network paths from the root the source is |
| portid         | See port\_identity structure                                      |
| port\_number   | portNumber represents the PTP ports on the network.               |
