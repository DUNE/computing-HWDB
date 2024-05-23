---
title: Introduction to the DUNE HWDB
teaching: 30
exercises: 0
questions:
- question 1
objectives:
- objective 1
- objective 2
keypoints:
- keypoint 1
---
## Lesson Part 1

Part 1...

## Lesson Part 2

## PID

The Parts Identifier (**PID**) is a 32-characters alphanumeric string that is used to uniquely identify all the LBNF and DUNE components that are used during the construction of the LBNF facility (including both the far site at the Sanford Underground Research Facility – SURF and the near site at Fermilab) and of all the corresponding detectors. The parts identifier forms a unique identifier for that part in the hardware database. Each part which has important information associated with it must have a parts identifier assigned so the data can be archived in the hardware database. The parts identifier is used for all equipment bar codes, QR codes, tags and other systems of identification. The PID is composed of 10 fields, of which 7 are required

### Project Identifier (required)

The project identifier is a single character in the range A-Z representing the major divisions in the DUNE/LBNF enterprise. The designations are as follows:
- **D**: DUNE (includes approved far detector modules and near detectors)
- **I**: Integration (includes cryostats, cryogenic plants, system engineering, installation …..)
- **L**: LBNF (includes Conventional facilities, cavern services, …..)
- **P**: Future project.

### System Identifier (required)

The system identifier is a three-digit (001-999) number representing the major subdivisions in responsibility for LBNF/DUNE. In general, each detector consortium is assigned a separate system identifier and the consortium is then assigned the responsibility of defining the sub-systems and components under their authority.

<style>
  details {
    margin: 1em 0;
  }
  summary {
    font-weight: bold;
    cursor: pointer;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
  }
</style>

<details>
  <summary>Click to expand table</summary>

  <table>
    <thead>
      <tr>
        <th>System ID</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0</td>
        <td>Invalid</td>
      </tr>
      <tr>
        <td>1</td>
        <td>FD1-HD Complete Detector</td>
      </tr>
      <tr>
        <td>2</td>
        <td>FD1-HD Instrumented Anode Plane (with Elec and photon Det.)</td>
      </tr>
      <tr>
        <td>3</td>
        <td>FD1-HD Anode Plane Assemblies (bare wire planes)</td>
      </tr>
      <tr>
        <td>4</td>
        <td>FD1-HD Photon Detection System</td>
      </tr>
      <tr>
        <td>5</td>
        <td>FD1-HV HY</td>
      </tr>
      <tr>
        <td>6</td>
        <td>FD1-HD Calibration</td>
      </tr>
      <tr>
        <td>51</td>
        <td>FD2-VD Complete Detector</td>
      </tr>
      <tr>
        <td>52</td>
        <td>FD2-VD Instrumented Top Charge Readout Planes (CRP) (inc. Elect)</td>
      </tr>
      <tr>
        <td>53</td>
        <td>FD2-VD Instrumented Bottom Charge Readout Planes (CRP) (inc, Elect)</td>
      </tr>
      <tr>
        <td>54</td>
        <td>FD2-VD Instrumented Cathode Plane (inc. PD)</td>
      </tr>
      <tr>
        <td>55</td>
        <td>FD2-VD Top Charge Readout Planes (CRP)</td>
      </tr>
      <tr>
        <td>56</td>
        <td>FD2-VD Bottom Charge Readout Planes (CRP)</td>
      </tr>
      <tr>
        <td>57</td>
        <td>FD2-VD Top Vertical Drift CRP Electronics</td>
      </tr>
      <tr>
        <td>58</td>
        <td>FD2-VD Photon Detector</td>
      </tr>
      <tr>
        <td>59</td>
        <td>FD2-VD Calibration</td>
      </tr>
      <tr>
        <td>80</td>
        <td>FD-2-VD HV</td>
      </tr>
      <tr>
        <td>81</td>
        <td>FD1-HD TPC Elec. and FD2-VD Bottom Elec.</td>
      </tr>
      <tr>
        <td>82</td>
        <td>FD DAQ</td>
      </tr>
      <tr>
        <td>83</td>
        <td>FD Slow Control</td>
      </tr>
      <tr>
        <td>84</td>
        <td>FD Cryogenic Instrumentation</td>
      </tr>
      <tr>
        <td>85</td>
        <td>FD Integration</td>
      </tr>
      <tr>
        <td>86</td>
        <td>FD Installation</td>
      </tr>
      <tr>
        <td>100</td>
        <td>ND: Near detector complex</td>
      </tr>
      <tr>
        <td>101</td>
        <td>ND: Liquid Argon Near Detection</td>
      </tr>
      <tr>
        <td>102</td>
        <td>ND: TMS</td>
      </tr>
      <tr>
        <td>103</td>
        <td>ND: Beam Monitor - SAND</td>
      </tr>
      <tr>
        <td>104</td>
        <td>ND: DAQ</td>
      </tr>
      <tr>
        <td>105</td>
        <td>ND: Slow Controls</td>
      </tr>
      <tr>
        <td>106</td>
        <td>ND: Prism Infrastructure</td>
      </tr>
      <tr>
        <td>107</td>
        <td>ND: Integration</td>
      </tr>
      <tr>
        <td>108</td>
        <td>ND: Installation</td>
      </tr>
      <tr>
        <td>200</td>
        <td>FS: Safety</td>
      </tr>
      <tr>
        <td>201</td>
        <td>FS: BSI</td>
      </tr>
      <tr>
        <td>220</td>
        <td>NS: Safety</td>
      </tr>
      <tr>
        <td>221</td>
        <td>NS: BSI</td>
      </tr>
      <tr>
        <td>300</td>
        <td>FS: Cryogenics</td>
      </tr>
      <tr>
        <td>321</td>
        <td>NS: Cryogenics</td>
      </tr>
      <tr>
        <td>400</td>
        <td>FS: Networking</td>
      </tr>
      <tr>
        <td>421</td>
        <td>NS: Networking</td>
      </tr>
      <tr>
        <td>500</td>
        <td>Computing</td>
      </tr>
      <tr>
        <td>600</td>
        <td>FD Cryostat</td>
      </tr>
      <tr>
        <td>621</td>
        <td>ND Cryostat</td>
      </tr>
      <tr>
        <td>900</td>
        <td>ProtoDUNE-Il complete detector</td>
      </tr>
      <tr>
        <td>901</td>
        <td>FD2-VD Module-0 complete detector</td>
      </tr>
    </tbody>
  </table>

</details>

### Subsystem Identifier (required)

The subsystem ID is a three-digit number (001-999) defined by the consortium or responsible group. Its purpose is to allow the consortia to separate the major components under their responsibility into subsystems.

### Component Type Identifier (required)

The component Type ID is a 5-digit number (00001-99999) used to identify the specific parts in a subsystem. Together with the subsystem ID the component Type ID defines the part inside the consortium scope.


### Item Number (required)

The item number is a five-digit number used to specify the exact part in a series and is assigned by the HWDB. It serves the typical role of the serial number in commercial fabrication. Five digits was chosen as the vast majority of components will have less than 100,000 units fabricated. In the handful of situations where this is not the case, different Component Type IDs will be needed for batches. 


### Country of Origin (required)

The country of origin is a two-character string representing the country responsible for fabricating the part or assembling the sub-components into the assembly (AA-ZZ). The country codes are specified according to the ISO3166 standard (ISO 3166-1 alpha-2). The list of active countries in the DUNE collaboration are as follows:

| Country          | Code | Country          | Code | Country          | Code | Country          | Code |
|------------------|------|------------------|------|------------------|------|------------------|------|
| Armenia          | AM   | Madagascar       | MG   | Brazil           | BR   | Mexico           | MX   |
| Canada           | CA   | Netherlands      | NL   | CERN             | CH   | Paraguay         | PY   |
| Chile            | CL   | Peru             | PE   | China            | CN   | Poland           | PL   |
| Colombia         | CO   | Portugal         | PT   | Czech Republic   | CZ   | Romania          | RO   |
| Finland          | FI   | Russia           | RU   | France           | FR   | Spain            | ES   |
| Georgia          | GE   | Sweden           | SE   | Germany          | DE   | Switzerland      | CH   |
| Greece           | GR   | Turkey           | TR   | India            | IN   | Ukraine          | UA   |
| Iran             | IR   | United Kingdom   | GB   | Italy            | IT   | USA              | US   |
| Japan            | JP   | Korea, South     | KR   |                  |      |                  |      |


### Responsible Institution ID (required)

The responsible institution ID is a three-digit number (001-999) representing the institution inside LBNF/DUNE responsible for the part or assembly. The responsible institution is the last of the immutable fields making both the country and institution required information before a part number can be assigned to a given part. The range 001-500 are reserved for the DUNE collaboration institutions. 000 is an illegal value.



{% include links.md %}

