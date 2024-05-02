"use client"
import BaseIcon from "@/app/_components/icons/base-icon";
import {SvgIcon as SvgIconProps} from "@/app/_components/icons/icon-types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M67.2759 45.7331V59.0771C67.2759 70.3293 56.781 79.4537 43.8337 79.4537C30.8865 79.4537 20.3916 70.3293 20.3916 59.0771V45.7331C20.3916 56.9853 30.8865 65.0278 43.8337 65.0278C56.781 65.0278 67.2759 56.9853 67.2759 45.7331Z"/><path d="M67.2759 27.7006C67.2759 30.9825 66.3742 34.0119 64.7874 36.6086C60.9284 42.956 52.9942 46.9953 43.8337 46.9953C34.6733 46.9953 26.739 42.956 22.8801 36.6086C21.2932 34.0119 20.3916 30.9825 20.3916 27.7006C20.3916 22.0745 23.0243 16.9893 27.2439 13.3107C31.4995 9.59606 37.3421 7.32397 43.8337 7.32397C50.3254 7.32397 56.1679 9.59606 60.4236 13.2747C64.6432 16.9893 67.2759 22.0745 67.2759 27.7006Z"/><path d="M67.2759 27.7006V45.733C67.2759 56.9852 56.781 65.0277 43.8337 65.0277C30.8865 65.0277 20.3916 56.9852 20.3916 45.733V27.7006C20.3916 16.4484 30.8865 7.32397 43.8337 7.32397C50.3254 7.32397 56.1679 9.59606 60.4236 13.2747C64.6432 16.9894 67.2759 22.0745 67.2759 27.7006Z"/>
    </BaseIcon>
  );
}