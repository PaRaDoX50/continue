import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:scapia_cards/screens/base/network/scapia_errors.dart';
import 'package:scapia_cards/screens/scapia_badges_gamification/models/badge_progress_model.dart';
import 'package:scapia_cards/screens/scapia_badges_gamification/service/gamification_service.dart';

class BadgeProgressController extends GetxController {
  BadgeProgressController({ GamificationService? gamificationService, required this.badgeId})
      : _gamificationService =
  gamificationService ?? Get.put(GamificationService());

  final GamificationService _gamificationService;
  final String badgeId;
Rx < BadgeProgressModel ?> badgeProgressResponse = Rx(null);
Rx < bool > isLoading = false.obs;
Rx < ScapiaNetworkErrorResponse ?> progressError = Rx(null);

@override
void onInit() {
  super.onInit();
  getBadgeProgress(badgeId);
}

getBadgeProgress(String badgeId) {
  isLoading.value = true;
  _gamificationService
    .getBadgeProgress(badgeId)
    .then((value) {
      badgeProgressResponse.value = value;
      isLoading.value = false;
    }).catchError((error) {
      progressError.value = error;
      isLoading.value = false;
    });
}

}
