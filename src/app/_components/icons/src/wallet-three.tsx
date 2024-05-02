"use client"
import BaseIcon from "@/app/_components/icons/base-icon";
import {SvgIcon as SvgIconProps} from "@/app/_components/icons/icon-types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M47.1062 40.879H25.4673"/><path d="M7.43457 40.879V24.2171C7.43457 16.8599 13.3853 10.9092 20.7425 10.9092H41.0109C48.3681 10.9092 54.3188 15.4894 54.3188 22.8466"/><path d="M63.2628 44.6658C61.4596 46.3969 60.5941 49.0656 61.3154 51.8065C62.217 55.1606 65.535 57.2885 68.9972 57.2885H72.3512V62.5179C72.3512 70.4882 65.8956 76.9438 57.9253 76.9438H21.8605C13.8902 76.9438 7.43457 70.4882 7.43457 62.5179V37.2725C7.43457 29.3022 13.8902 22.8466 21.8605 22.8466H57.9253C65.8596 22.8466 72.3512 29.3383 72.3512 37.2725V42.5018H68.4562C66.4365 42.5018 64.5972 43.2953 63.2628 44.6658Z"/><path d="M79.5645 46.1804V53.6097C79.5645 55.6294 77.9054 57.2884 75.8497 57.2884H68.8892C64.9942 57.2884 61.4239 54.4393 61.0993 50.5443C60.8829 48.2722 61.7484 46.1444 63.2631 44.6657C64.5975 43.2953 66.4368 42.5017 68.4565 42.5017H75.8497C77.9054 42.5017 79.5645 44.1608 79.5645 46.1804Z"/>
    </BaseIcon>
  );
}