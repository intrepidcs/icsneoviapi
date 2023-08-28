---
sidebar_position: 2
id: timestamp-structure
---

# timestamp Structure

This structure defines Timestamp from gPTP

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct __declspec (align(1))
{
   uint16_t seconds_msb;
   uint32_t seconds_lsb;
   uint32_t nanoseconds;
}timestamp; 
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=1)> Public Structure timestamp
   Dim seconds_msb As UInt16
   Dim seconds_lsb As UInt32
   Dim nanoseconds As UInt32
End Structure 
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=1)]
public struct timestamp
{
   public UInt16 seconds_msb;
   public UInt32 seconds_lsb;
   public UInt32 nanoseconds;
}
```
</TabItem>
</Tabs>

**Remarks**

| Item         | Description                                                              |
| ------------ | ------------------------------------------------------------------------ |
| seconds\_msb | Most significant portion of Integer value of the time stamp in seconds.  |
| seconds\_lsb | Least significant portion of Integer value of the time stamp in seconds. |
| nanoseconds  | Fractional seconds in nanoseconds                                        |
