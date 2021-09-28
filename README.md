# Code examples for "Redmine View Customize Plugin"

This is a project that publishes code examples of [View customize plugin for Redmine](https://github.com/onozaty/redmine-view-customize).  
Please refer to it when you write your code.

If the code you try does not work, you can ask a question via the project's [Issue](https://github.com/onozaty/redmine-view-customize-scripts/issues).  
**Please note that this is a place to ask questions, not a place to request coding.**

This project is maintained by [@onozaty](https://github.com/onozaty), the author of the View customize plugin.  
If this project serves you well, please support this project as a [sponsor](https://github.com/sponsors/onozaty).

## Examples 

### Issue / チケット

* [Set the default value by tracker / トラッカーに応じてデフォルト値を設定](./examples/0003.set_default_value_by_tracker/example.md)  
* [Link custom fields (refining the children according to the parent value) / カスタムフィールドを連動させる(親の値に応じて、子を絞り込む)](./examples/0007.link_custom_fields/example.md)  
* [Change the visibility of custom fields by status / チケットのステータスに応じて、カスタムフィールドの表示/非表示を切り替える](./examples/0008.change_custom_field_visibility_by_status/example.md)

### Issues list / チケット一覧

* [Decorate the issue list / チケット一覧を装飾](./examples/0002.decorate_issue_list/example.md)  

### Other / その他

* [Change the color of the header for each project / プロジェクト毎にヘッダの色を変える](./examples/0001.change_header_color_by_project/example.md)  
* [Toggle the display of the sidebar / サイドバーの表示・非表示を切り替え](./examples/0004.toggle_sidebar/example.md)  
* [Add a link to the list of all issues on the header / 全てのチケット一覧のリンクをヘッダに追加](./examples/0005.add_issues_link_on_header/example.md)  
* [Change the URL of the link to each project in the project list / プロジェクト一覧の各プロジェクトへのリンクのURLを変更](./examples/0006.change_project_link_url/example.md)  

### Old

* [新しいチケットタブを表示する(Redmine3.3で"+"ボタンと両立した時)](./old-examples/add_new_issue_tab.js)
* [チケット一覧の進捗率にて値も表示する](./old-examples/add_value_of_progress_on_issues_list.js)
* [カスタムフィールドのチェックボックスを2列で表示](./old-examples/multi_column_checkbox.css)
* [チケット一覧のコンテキストメニューにコマンド追加](./old-examples/add_command_to_issues_context_menu.js)
* [ステータスに応じて、カスタムフィールドの表示を切り替える](./old-examples/change_custom_field_visibility_when_change_status.js)
* [チェックボックスを横並びにする](./old-examples/row_checkbox.css)
* [チケット一覧のコンテキストメニューからステータスを切り替えた際に、バージョンも変更する](./old-examples/change_version_when_change_status_on_context_menu.js)
* [カスタムフィールドを説明の後ろに移動](./old-examples/move_custom_filed_after_description.js)
* [チケットの説明を非表示に](./old-examples/hide_issue_description.js)
* [リポジトリタブでのデフォルトブランチを変更](./old-examples/change_default_branch_on_repository_tab.js)
* [カスタムフィールドの値でチケット一覧のフォントをBoldに変える](./old-examples/change_font_weight_by_custom_field_on_issue_list.js)
* [子チケット一覧に親子関係を外すボタンを追加し、ボタン押下時にREST APIを使って親チケットの情報をクリアする](./old-examples/add_button_use_rest_api.js)
* [チケット作成、編集画面の作成/送信ボタンにaccesskeyを追加する](./old-examples/add_accesskey_on_issue_submit_button.js)
* [長いテキストを幅広く表示する](./old-examples/display_long_text_wide.js)
* [担当者を入力補完を利用して選択する](./old-examples/autocomplete_assigned_to.js)
* [REST APIを利用して複数の子チケットをまとめて作成する(バージョン1.2.0以上)](./old-examples/create_children_issues_using_rest_api.js)
* [REST APIを利用して複数の関連チケットをまとめて作成する(バージョン1.2.0以上)](./old-examples/create_relation_issues_using_rest_api.js)
* [REST APIを利用して親チケットの情報をクリアする(バージョン1.2.0以上)](./old-examples/delete_parentage_relationship_using_rest_api.js)
* [子チケット作成時に親チケットの情報を引き継ぐ(バージョン1.2.0以上)](./old-examples/take_over_information_when_adding_child_issue.js)
* [クリップボードから画像を貼り付ける(バージョン1.2.0以上)](./old-examples/copy_image_from_clipboard.js)
* [テキストエリアで入力補完(バージョン2.1.0以上)](./old-examples/input_suggestion_on_textarea.html)
* [プロジェクトを変更したら、強制的に担当者を変更する(バージョン1.2.0以上)](./old-examples/change_assignee_when_change_project.js)
* [カスタムフィールドの入力欄をトラッカーの後ろに移動(バージョン1.2.0以上)](./old-examples/move_custom_filed_input_after_tracker.js)
* [ステータスを却下にしたときに、期日が未入力だったら今日の日付を入れる(バージョン1.2.0以上)](./old-examples/set_today_to_due_date_when_resolved.js)
* [プロジェクトを変更したら、ウォッチャーを変更する(バージョン1.2.0以上)](./old-examples/change_watcher_when_change_project.js)
* [特定のプロジェクトでファイル添付を非表示にする](./old-examples/hide_attachments_form.css)
* [カスタムフィールドを3カラムで表示する(バージョン1.2.0以上)](./old-examples/change_3column_custom_fields.js)
* [親のカスタムフィールドが選択されたら、子のカスタムフィールドも入力可能に(バージョン1.2.0以上)](./old-examples/enable_when_custom_field_selected.js)
* [期日の3日前になったら警告を表示(バージョン1.2.0以上)](./old-examples/show_alert_on_due_date.js)
* [チェックされたらテキストボックスを無効化(バージョン1.2.0以上)](./old-examples/disable_text_depending_on_checked.js)
* [特定ユーザの削除、ロックボタンを非表示にする](./old-examples/hide_lock_button_and_delete_button.css)
* [特定ユーザに対して一部管理者メニューを非表示にする](./old-examples/hide_part_of_admin_menu.js)
* [特定の日以降は新規チケットのリンクを非表示に](./old-examples/hide_new_issue_link_after_date.js)
* [チケット一覧横のSummaryリンクを非表示に](./old-examples/hide_issue_summary_link.css)
* [親チケットが設定されたらカスタムフィールドを無効に](./old-examples/disable_if_parent_issue_is_set.js)
* [チケットタブでのデフォルトクエリ変更](./old-examples/change_issue_default_query.js)
* [チケット一覧を折りたたんだ状態で表示する](./old-examples/folded_issues.js)
