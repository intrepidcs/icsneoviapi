---
sidebar_position: 6
id: iso9141_keyword2000__init_step-structure
---

# ISO9141_KEYWORD2000_INIT_STEP Structure

This structure defines settings for the ISO9141 and Keyword 2000 initialization step on neoVI Fire devices.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef VS_MODIFIER struct
{
    icscm_uint16 time_500us;
    icscm_uint16 k;
    icscm_uint16 l;
}ISO9141_KEYWORD2000__INIT_STEP;
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=2)>Public Structure ISO9141_KEYWORD2000__INIT_STEP
    Dim time_500us As Int16
    Dim k As Int16
    Dim l As Int16
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=2)]
public struct ISO9141_KEYWORD2000__INIT_STEP
{
    public UInt16 time_500us;
    public UInt16 k;
    public UInt16 l;
}
```
</TabItem>
</Tabs>

**Remarks**

**Structure Elements**

| Item                                                       | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| [icscm\_uint16](../intrepid-api-data-types) time\_500us    | Number of 500µs Ticks for state to be set                  |
| [icscm\_uint16](../intrepid-api-data-types) k              | <p>Sets the state of the K line<br/>Low = 0<br/>High = 1</p> |
| [icscm\_uint16](../intrepid-api-data-types) l              | <p>Sets the State of the L line<br/>Low = 0<br/>High = 1</p> |
