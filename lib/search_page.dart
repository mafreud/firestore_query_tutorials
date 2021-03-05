import 'package:flutter/material.dart';

class SearchPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('さがす'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            //ElevatedButtonをタップしたら、該当ユーザーのリストを表示
            ElevatedButton(
              onPressed: () {},
              child: Text(''),
            ),
          ],
        ),
      ),
    );
  }
}
