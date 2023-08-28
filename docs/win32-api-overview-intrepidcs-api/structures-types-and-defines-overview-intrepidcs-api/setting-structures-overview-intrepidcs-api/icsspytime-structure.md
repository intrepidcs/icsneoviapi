---
sidebar_position: 21
id: icsspytime-structure
---

# icsSpyTime Structure

Structure for GetRTC and SetRTC

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct
{
  unsigned char sec;
  unsigned char min;
  unsigned char hour;
  unsigned char day;
  unsigned char month;
  unsigned char year;
}icsSpyTime;
```
</TabItem>
<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=8)> Public Structure icsSpyTime
  Dim sec As Byte
  Dim min As Byte
  Dim hour As Byte
  Dim day As Byte
  Dim month As Byte
  Dim year As Byte
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=8)]
public struct icsSpyTime
{
  public byte sec;
  public byte min;
  public byte hour;
  public byte day;
  public byte month;
  public byte year;
}
```
</TabItem>
</Tabs>

**Remarks**

| Item  | Description                  |
| ----- | ---------------------------- |
| sec   | Seconds place to read or set |
| min   | Minutes place to read or set |
| hour  | Hours place to read or set   |
| day   | Day place to read or set     |
| month | Month place to read or set   |
| year  | Year Place to read or set    |
